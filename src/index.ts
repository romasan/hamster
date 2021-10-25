import Cover from './Cover';

const loadImage = src => new Promise(resolve => {
    const image = new Image();
    image.src = src;
    image.onload = e => {
        resolve(e.target);
    };
});

const render = (callback, start?) => {
    if (!start) {
        start = Date.now();
    }
    if (callback(Date.now() - start)) {
        requestAnimationFrame(() => render(callback, start));
    }
}

let texts = [];
let cursor = {
    x: -1,
    y: -1,
}

const drawText = (ctx, text, x, y): void => {
    ctx.font = '10px Courier New';
    ctx.fillStyle = '#000000';
    ctx.fillRect(x, y, 6 * text.length, 12);
    ctx.fillStyle = '#ffff00';
    ctx.fillText(text, x, y + 10);
};

const addText = (text: string, x: number, y: number): void => {
    texts.push({ text, x, y });
};

const drawTexts = (ctx): void => {
    texts.forEach(({ text, x, y }) => {
        drawText(ctx, text, x, y);
    });
    texts = [];
};

const log = (text): void => {
    addText(text, 5, 5 + 13 * texts.length);
};

const drawCursor = (ctx, w, h): void => {
    ctx.moveTo(cursor.x, 0);
    ctx.lineTo(cursor.x, h);
    ctx.stroke();

    ctx.moveTo(0, cursor.y);
    ctx.lineTo(w, cursor.y);
    ctx.stroke();
};

const initCanvas = async () => {
    const w = document.body.offsetWidth, h = document.body.offsetHeight;
    const canvas = document.querySelector('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');

    const images = await Promise.all([
        '/assets/1.jpg',
        '/assets/2.jpg',
        '/assets/3.jpg',
        '/assets/4.jpg',
        '/assets/5.jpg',
        '/assets/6.jpg',
        '/assets/7.png',
        '/assets/8.jpg',
        '/assets/9.jpg',
        '/assets/10.jpg',
    ].map(
        async (url) => ({
            url,
            image: await loadImage(url),
        })
    ));

    const list = images.map(({ url, image }, index) => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const speed = (0.01 + Math.random() * 0.01) * (v => Math[v >= 0 ? 'ceil' : 'floor'](v))(Math.random() - 0.5);
        const vector = {
            x: -0.2,//Math.random() * 0.2 - 0.1,
            y: -0.2,//Math.random() * 0.2 - 0.1,
        }
        const cover = new Cover({
            ctx,
            image: image,
            position: { x, y },
            scale: 0.5,
        });
        cover.on('draw', v => {
            log(`${(url + ':').padEnd(15)}\
${String(Math.floor(v.left)).padStart(5)}\
${String(Math.floor(v.top)).padStart(5)}\
${String(Math.floor(v.right)).padStart(5)}\
${String(Math.floor(v.bottom)).padStart(5)}`);
        });
        return { x, y, speed, vector, cover };
    });

    document.addEventListener('mousemove', e => {
        cursor = {
            x: e.clientX,
            y: e.clientY
        };
    });
    document.addEventListener('mouseout', e => {
        cursor = {
            x: -1,
            y: -1
        };
    });

    let lastTime;

    render(t => {
        // canvas.width = canvas.width;
        // ctx.clearRect(0, 0, w, h);

        list.forEach(item => {
            const degrees = (t * item.speed) % 360;
            const left = (item.x + /*t * */item.vector.x) % w;
            const top = (item.y + /*t * */item.vector.y) % h;
            const rect = item.cover
                .setState({ degrees, left, top })
                .draw()
                .getRect();

            if (rect.right > w && rect.bottom > h) {
                item.cover.draw({ degrees, left: left - w, top: top - h });
            }
            if (rect.right > w) {
                item.cover.draw({ degrees, left: left - w, top });
            }
            if (rect.bottom > h) {
                item.cover.draw({ degrees, left, top: top - h });
            }
        });

        if (process.env.NODE_ENV === 'development') {
            log(`FPS: ${Math.min(Math.floor(1000 / (t - lastTime)), 999)}`);
        }
        lastTime = t;

        const pixel = ctx.getImageData(cursor.x, cursor.y, 1, 1).data;
        const hexColor = '#' + [...pixel].slice(0, 3).map(e => e.toString(16).padStart(2, 0)).join('');
        log(`color under cursor: ${hexColor}`);

        ctx.fillStyle = hexColor;
        ctx.fillRect(
            cursor.x + 1,
            cursor.y - 21,
            20,
            20
        );
        
        drawTexts(ctx);
        drawCursor(ctx, w, h);

        return true;// ++t < 5000;
    });
};
const main = () => {
    initCanvas();
};

document.addEventListener('DOMContentLoaded', main);
