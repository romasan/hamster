import { rotate, EventEmitter } from '../helpers';

interface State {
    ctx?: CanvasRenderingContext2D;
    image?: any;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    degrees?: number;
}

interface DrawEventValue {
    left: number;
    top: number;
    rigth: number;
    bottom: number;
}

class Cover extends EventEmitter {
    state: State = {};

    constructor (data) {
        super();
        this.setState(data);
    }

    setState({ ctx, name, image, left, top, position, degrees, width, height, size, scale }) {
        const _left = (typeof left === 'number' && left) || (typeof position?.x === 'number' && position.x) || this.state.left || 0;
        const _top = (typeof top === 'number' && top) || (typeof position?.y === 'number' && position.y) || this.state.top || 0;
        const _image = image || this.state.image;
        let _width = width || size?.width || this.state.width || _image.width;
        let _height = height || size?.height || this.state.height || _image.height;
        if (typeof scale === 'number') {
            _width = _image?.width * scale;
            _height = _image?.height * scale;
        }

        this.state = {
            ctx: ctx || this.state.ctx,
            image: image || this.state.image,
            left: _left,
            top: _top,
            width: _width,
            height: _height,
            degrees: typeof degrees === 'number' ? degrees : this.state.degrees,
        }

        return this;
    }

    getRect() {
        const { ctx, left, top, width, height, degrees = 0 } = this.state;

        const lt = rotate(left, top, width, height, degrees);
        const rt = rotate(left, top, -width, height, degrees);
        const rb = rotate(left, top, -width, -height, degrees);
        const lb = rotate(left, top, width, -height, degrees);

        const x = Math.min(lt.x, rt.x, rb.x, lb.x);
        const right = Math.max(lt.x, rt.x, rb.x, lb.x);
        const y = Math.min(lt.y, rt.y, rb.y, lb.y);
        const bottom = Math.max(lt.y, rt.y, rb.y, lb.y);

        if (process.env.NODE_ENV === 'development') {
            ctx.strokeStyle = '#ffff00';
            ctx.strokeRect(
                Math.floor(x),
                Math.floor(y),
                Math.floor(right - x),
                Math.floor(bottom - y)
            );
        }

        return {
            x,
            y,
            width: right - x,
            height: bottom - y,
            top: y,
            right,
            bottom,
            left: x,
        };
    }

    draw(data?) {
        const { ctx, image, left, top, position, degrees, width, height, size, scale } = data || {};
        const _ctx = this.state.ctx || ctx;
        const _image = this.state.image || image;
        const _left = (typeof left === 'number' && left) || (typeof position?.x === 'number' && position.x) || this.state.left || 0;
        const _top = (typeof top === 'number' && top) || (typeof position?.y === 'number' && position.y) || this.state.top || 0;
        let _width = width || size?.width || this.state.width || image?.width;
        let _height = height || size?.height || this.state.height || image?.height;
        if (typeof scale === 'number') {
            _width = image?.width * scale;
            _height = image?.height * scale;
        }
        const _degrees = typeof degrees === 'number' ? degrees : this.state.degrees;
        
        this.emit('draw', {
            left: _left,
            top: _top,
            right: _left + _width,
            bottom: _top + _height,
        } as DrawEventValue);
        if (typeof _degrees === 'number') {
            _ctx.save();
            _ctx.translate(_left + _width / 2, _top + _height / 2);
            _ctx.rotate(_degrees * Math.PI / 180);
            _ctx.drawImage(_image, -_width / 2, -_height / 2, _width, _height);
            _ctx.restore();
        } else {
            _ctx.drawImage(_image, _left, _top, _width, _height);
        }

        return this;

        // const p = new Path2D('M 182.09339787497646 269.42132084132953 C 246.05278780904104 349.6243653618232 294.27613736250237 303.93908683749135 295.7989799799801 301.4010158083618 C 297.32182259745787 298.8629447792323 384.12385179368835 253.17766625490046 317.62639083049424 215.61421502378317 C 251.12892986730014 178.0507637926659 190.72283937401696 120.69035853433817 175.49441319923966 165.36040864701818 C 160.26598702446236 210.03045875969818 118.13400794091189 189.21827632083586 182.09339787497646 269.42132084132953 z');
        // _ctx.fill(p);
    }
}

export default Cover;
