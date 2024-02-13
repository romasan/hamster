import { emit } from './helpers'

const ws = new WebSocket('wss://node.nbauer.ru:9000');

export const send = (event, payload) => {
	if (ws.readyState === 1) {
		ws.send(JSON.stringify({ event, payload }));
	}
};

let timer = null

ws.onopen = () => {
	timer = setInterval(() => {
		ws.send(2);
	}, 1000)
};

ws.onmessage = ({ data }) => {
	try {
		const { event, payload } = JSON.parse(data);

		if (event) {
			emit(event, payload);
		}
	} catch (e) {
		console.log('Error: parse json', e);
	}
};

ws.onclose = () => {
	clearInterval(timer);
}
