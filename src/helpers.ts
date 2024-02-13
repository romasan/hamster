export const render = (callback, start?, frame?) => {
	if (!start) {
		start = Date.now()
	}

	if (!frame) {
		frame = 0
	}

	if (callback(Date.now() - start, ++frame)) {
		requestAnimationFrame(() => render(callback, start, frame))
	}
};

export const pick = (source, keys: string[]) =>
	keys.reduce(
		(obj, key) => ({
			...obj,
			[key]: source[key],
		}),
		{}
	);

export const calcAge = (birthday) => new Date(Date.now() - birthday).getUTCFullYear() - 1970;

export const debounce = (callback: () => void, delay?: number, timer?: number) => (...args) => {
	clearTimeout(timer);
	timer = setTimeout(() => callback(...args), delay || 100);
};

const events = {};

export const on = (event, callback) => {
	events[event] = [...(events[event] || []), callback]
};

export const emit = (event, payload) => {
	events[event]?.forEach((callback) => callback(payload))
};
