async function f() {
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

	try {
		const p = await createPromise(9);
		console.log("done, the result is: " + p);
	} catch(err){
		console.log("rejected with error: " + err);
	}
	
}

f();
