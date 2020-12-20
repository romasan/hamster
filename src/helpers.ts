export const rotate = (x, y, w, h, d) => {
    const center_x = w / 2;
    const center_y = h / 2;
    const _d = d * Math.PI / 180;
    return {
        x: (x + Math.abs(w) / 2) - (center_x * Math.cos(_d) - center_y * Math.sin(_d)),
        y: (y + Math.abs(h) / 2) - (center_y * Math.cos(_d) + center_x * Math.sin(_d))
    };
};
