import { render } from '../src/helpers'
import { animatedLink } from '../src/animatedLink'

const parse = (text) => {
	return text
		.replace(/([^\s]+\.[^\s]+)/g, url => `<a href="https://${url}" target="_blank">↗ ${url.split('/').pop().replace('www.', '')}</a>`);
};

const projectsMain = () => {
	const timeline = document.querySelector('#timeline') as HTMLElement;
	const list = timeline.innerText
		.replace('{{YEAR}}', String(new Date().getFullYear()))
		.split('\n')
		.filter(Boolean)
		.map((line) => line.trim())
		.map((line) => {
			const el = document.createElement('div')
			switch (line[0]) {
				case '+':
					el.classList.add('item-year');
					el.innerText = line.slice(2);

					return el;
				case '-':
					el.classList.add('item-header');
					el.innerText = line.slice(2);

					return el;
				case '|':
					el.classList.add('item-content');
					el.innerHTML = parse(line.slice(2));

					return el;
			}
		})
		.filter(Boolean);

	timeline.innerText = '';
	list.forEach((item) => {
		if (item) {
			timeline.appendChild(item);
		}
	});
	timeline.style.display ='block';

	const elements = document.querySelectorAll('.nav');

	elements.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			animatedLink(event.target);
		});
	});

	const sleep = 10;
	let index = -1

	render((time) => {
		const next = Math.floor(time / sleep);

		if (next !== index) {
			for (let i = index; i <= next; i++) {
				list[list.length - 1 - i]?.style.display = 'block';
			}

			index = next;
		}

		const finish = list.length * sleep;

		if (time < finish) {
			return true;
		}

		timeline.classList.remove('loading');

		return false;
	});
};

document.addEventListener('DOMContentLoaded', projectsMain);
