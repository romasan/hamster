import { render, pick } from './helpers'

const STEP = 80;

export const animatedLink = (link, gurgle?) => {
	const canvas = document.querySelector('#canvas') as HTMLElement;
	const rects = link.getClientRects()[0];
	const el = document.createElement('div');

	canvas.appendChild(el);

	if (gurgle) {
		localStorage.setItem('link', Date.now());
		document.location = link.href;
	}

	el.classList.add(gurgle ? 'link-cover-second' : 'link-cover');
	setTimeout(() => {
		el.remove();
	}, 2000);
	Object.entries(pick(rects, ['left', 'top', 'width', 'height']))
		.forEach(
			([key, value]) => (el.style[key] = `${Math.ceil(Number(key === 'top' ? value + canvas.scrollTop : value))}px`)
		);
	const margins = [screen.height, screen.width];
	const margin = Math.max(...margins);
	const stepWidth = STEP;
	const steps = Math.ceil(margin / stepWidth);
	const sleep = 1;
	const width = el.style.width;
	const height = el.style.height;

	let step = 0;
	let prev = 0;
	let counter = 0;

	render((time, _step) => {
		if (prev === 0) {
			prev = time;
		}

		counter += time - prev;

		if (counter > sleep) {
			counter = 0;
			step += 1;
		}

		const padding = step * stepWidth;

		el.style.transform = `translate(-${padding}px, -${padding}px)`;
		el.style.width = `${parseInt(width) + padding * 2}px`;
		el.style.height = `${parseInt(height) + padding * 2}px`;

		if (step >= steps - 1) {
			if (!gurgle) {
				animatedLink(link, true);
			}

			return false;
		}

		return true;
	});
};
