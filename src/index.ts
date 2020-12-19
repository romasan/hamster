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
        '/assets/1.PNG',
        '/assets/2.PNG',
        '/assets/3.PNG',
        '/assets/4.png',
        '/assets/5.PNG',
        '/assets/6.PNG',
        '/assets/7.PNG',
        '/assets/8.PNG',
        '/assets/9.PNG',
        '/assets/10.PNG',
    ].map(loadImage));

    // const { width, height } = img;
    // ctx.drawImage(img, 100, 100, width / 2, height / 2);

    // let img = images[7];
    for (const img of images) {
        const x = Math.floor(Math.random() * w); 
        const y = Math.floor(Math.random() * h); 
        const degrees = Math.floor(Math.random() * 360);

        new Cover({
            ctx,
            image: img,
            position: { x, y },
            scale: 0.25,
            degrees
        });

        new Cover({
            ctx,
            image: img,
            position: { x: x - w, y },
            scale: 0.25,
            degrees
        });

        new Cover({
            ctx,
            image: img,
            position: { x, y: y - h },
            scale: 0.25,
            degrees
        });

    }
    let i = 0;
    render(t => {
        console.log('====', ++i, t);
        return t < 100;
    });
};
const main = () => {
    initCanvas();
};

document.addEventListener('DOMContentLoaded', main);
