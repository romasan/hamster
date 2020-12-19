class Cover {
    state = {};
    constructor (data) {
        this.setState(data);
        const { ctx, image, left, top, position, degrees, size, scale } = data;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        let width = size?.width || image.width;
        let height = size?.height || image.height;
        const _left = left || position?.x || 0;
        const _top = top || position?.y || 0;
        if (scale) {
            width = width * scale;
            height = height * scale;
        }

        if (typeof degrees === 'number') {
            ctx.save();
            ctx.translate(_left + width / 2, _top + height / 2);
            ctx.rotate(degrees * Math.PI / 180);
            ctx.drawImage(image, -width / 2, -height / 2, width, height);
            ctx.restore();
        } else {
            ctx.drawImage(image, _left, _top, width, height);
        }
    }

    setState({ ctx, image, left, top, position, degrees, width, height, size, scale }) {
        // console.log('==== pong', this.state);

        let _width = width || size?.width || this.state.width || image.width;
        let _height = height || size?.height || this.state.height || image.height;
        if (typeof scale === 'number') {
            _width = image.width * scale;
            _height = image.height * scale;
        }
        const _left = (typeof left === 'number' && left) || (typeof position?.x === 'number' && position.x) || 0;
        const _top = (typeof top === 'number' && top) || (typeof position?.y === 'number' && position.y) || 0;

        this.state = {
            ctx: ctx || this.state.ctx,
            image: image || this.state.image,
            left: _left,
            top: _top,
            degrees: typeof degrees === 'number' ? degrees : this.state.degrees,
            width: _width,
            height: height,
        }
    }
}

export default Cover;
