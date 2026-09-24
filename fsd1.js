const EventEmitter = require('events');

// DOM-like event target built on Node's EventEmitter.
class DomLikeElement extends EventEmitter {
	addEventListener(eventName, listener) {
		this.on(eventName, listener);
	}

	removeEventListener(eventName, listener) {
		this.off(eventName, listener);
	}

	dispatchEvent(event) {
		if (!event || !event.type) {
			throw new TypeError('An event with a type is required');
		}

		return this.emit(event.type, event);
	}
}

console.log('--- DOM-like event handling ---');
const button = new DomLikeElement();

const firstClickListener = (event) => {
	console.log(`[listener 1] ${event.type} received from ${event.target}`);
};

button.addEventListener('click', firstClickListener);
button.addEventListener('click', (event) => {
	console.log(`[listener 2] Click count: ${event.detail}`);
});

button.dispatchEvent({
	type: 'click',
	target: 'button',
	detail: 1
});

button.removeEventListener('click', firstClickListener);
button.dispatchEvent({
	type: 'click',
	target: 'button',
	detail: 2
});

console.log('\n--- Node.js event loop order ---');
console.log('1. synchronous code');

setTimeout(() => {
	console.log('4. setTimeout (timers phase)');
}, 0);

setImmediate(() => {
	console.log('5. setImmediate (check phase)');
});

process.nextTick(() => {
	console.log('2. process.nextTick (before promise callbacks)');
});

Promise.resolve().then(() => {
	console.log('3. Promise.then (after process.nextTick)');
});
