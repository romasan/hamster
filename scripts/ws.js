const PORT = 9000;
const WebSocket = require('ws');
const EventEmitter = require('events');
const ee = new EventEmitter();
const fs = require('fs');
const privateKey = fs.readFileSync('ssl-cert/privkey.pem', 'utf8');
const certificate = fs.readFileSync('ssl-cert/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const https = require('https');
const httpsServer = https.createServer(credentials);
httpsServer.listen(PORT);
const wss = new WebSocket.Server({ server: httpsServer });
console.log(`start websocket server on ${PORT} port`);

const users = {};

let _id = 0;

const send = (client, event, payload) => {
	client.send(JSON.stringify({ event, payload }))
};

const spam = (event, payload) => {
	wss.clients.forEach(client => {
		if (client.readyState === WebSocket.OPEN) {
			send(client, event, payload);
		}
	});
};

wss.on('connection', client => {
	const id = ++_id;
	const addr = client._socket.remoteAddress;
	const user = {
		id,
		position: null,
	};

	send(client, 'init', { users, user });
	spam('add', user);
	users[id] = user;

	console.log(`connected: client #${id} from ${addr} ${new Date()}`);

	client.on('message', (buf) => {
		const raw = buf.toString();

		if (raw === '2') {
			client.send(3);

			return;
		}

		try {
			const { event, payload } = JSON.parse(raw);

			ee.emit(event, { client, user, payload });
		} catch (e) {
			console.log('Error: parse json', raw);
		}
	});

	client.on('close', () => {
		console.log(`disconnected: client #${id} ${new Date()}`);

		delete users[id];

		spam('leave', id);
	});
})

ee.on('move', ({ user, payload }) => {
	user.position = payload;
	spam('move', user);
});
