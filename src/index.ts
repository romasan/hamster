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
    ].map(loadImage));

    const list = images.map(image => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const speed = (0.01 + Math.random() * 0.01) * (v => Math[v >= 0 ? 'ceil' : 'floor'](v))(Math.random() - 0.5);
        const vector = {
            x: Math.random() * 0.2 - 0.1,
            y: Math.random() * 0.2 - 0.1,
        }
        const cover = new Cover({
            ctx,
            image: image,
            position: { x, y },
            scale: 0.5,
        });
        return { x, y, speed, vector, cover };
    });

    ctx.font = '20px Arial';
    let lastTime;
    render(t => {
        // canvas.width = canvas.width;
        ctx.clearRect(0, 0, w, h);

        list.forEach(item => {
            const degrees = (t * item.speed) % 360;
            const left = (item.x + t * item.vector.x) % w;
            const top = (item.y + t * item.vector.y) % h;
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
            ctx.fillStyle = '#000000';
            ctx.fillRect(2, 2, 90, 21);
            ctx.fillStyle = '#ffff00';
            ctx.fillText(`FPS: ${Math.min(Math.floor(1000 / (t - lastTime)), 999)}`, 4, 20);
        }
        lastTime = t;

        return true;// ++t < 5000;
    });
};
const main = () => {
    initCanvas();
};

document.addEventListener('DOMContentLoaded', main);
