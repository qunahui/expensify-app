const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve({
		// 	name: 'Bart',
		// 	age: 23
		// });
		reject('Something went wrong!');
	}, 3000);
});

console.log('before');

promise.then((data) => {
	console.log(data);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');
