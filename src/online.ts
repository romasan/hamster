import { on, render } from './helpers';
import { send } from './ws';

const state = {
	dots: {},
};

on('init', ({ user, users }) => {
	state.user = user
	state.users = users
});

on('add', (user) => {
	state.users = {
		...state.users,
		[user.id]: user,
	}
});

on('leave', (id) => {
	delete state.users[id]
});

const pushPos = ({ clientX, clientY }) => {
	send('move', { x: clientX, y: clientY })
};

window.addEventListener('mousemove', pushPos);

on('move', user => {
	state.users[user.id] = user
});

const canvas = document.querySelector('#background');

render(() => {
	if (state.users) {
		Object.entries(state.users).forEach(([id, user]) => {
			if (user.id !== state.user.id && user.position) {
				if (!state.dots[id]) {
					const dot = document.createElement('div')
					dot.classList.add('dot')
					canvas?.appendChild(dot)
					state.dots[id] = dot
				}

				state.dots[id].style.top = `${user.position.y}px`
				state.dots[id].style.left = `${user.position.x}px`
			}
		})

		Object.entries(state.dots).forEach(([id, dot]) => {
			if (!state.users[id]) {
				dot.remove()
				delete state.dots[id]
			}
		})
	}

	return true;
});
