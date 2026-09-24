console.log('1. Synchronous code starts');

setTimeout(() => {
	console.log('4. setTimeout callback (timers phase)');
}, 0);

setImmediate(() => {
	console.log('5. setImmediate callback (check phase)');
});

process.nextTick(() => {
	console.log('2. process.nextTick callback');
});

console.log('3. Synchronous code ends');
