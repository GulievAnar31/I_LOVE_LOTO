export function generateNumbers() {
	const numbers = new Array(27).fill(null);
	const uniqueNumbers: number[] = [];

	while (uniqueNumbers.length < 15) {
		const randomNum = Math.floor(Math.random() * 90) + 1;
		if (!uniqueNumbers.includes(randomNum)) {
			uniqueNumbers.push(randomNum);
		}
	}

	uniqueNumbers.forEach((num) => {
		let randomIndex;
		do {
			randomIndex = Math.floor(Math.random() * 27);
		} while (numbers[randomIndex] !== null);
		numbers[randomIndex] = num;
	});

	return numbers;
}