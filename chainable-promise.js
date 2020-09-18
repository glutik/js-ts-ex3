function f() {
	const createPromise = (num) => {
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				if (num > 10) {
					resolve(true);
				} else {
					reject("the number is too small");
				}
			}, 500);
		});

		return promise;
	};

	const p = createPromise(9).then(
		(resolve) => {
			console.log("done, the result is: " + resolve);
		},
		(reject) => {
			console.log("rejected with error: " + reject);
		}
	);
}

f();
