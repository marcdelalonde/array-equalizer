const algo = {

	equalizer: (array) => {

		// Display the initial state of the array
		console.log(array);

		// I compute whats the average value
		const sum = array.reduce((a, b) => a + b);
		const average = sum / array.length;

		// Where I store the index I already worked on
		let wordOnIndex = [];

		// Return if the array have the same value everywhere
		const hasSameValue = (givenArray) => !!givenArray.reduce((a, b) => (a === b) ? a : NaN);

		// Compute if the right or element should be decrease by one
		const takeRightOrLeft = (index) => {
			const indexToTakeFrom = getBiggerAroundIndex(index);
			if (wordOnIndex.indexOf(indexToTakeFrom) > -1 || array[indexToTakeFrom] === 0) {
				return;
			}

			wordOnIndex.push(indexToTakeFrom);
			--array[indexToTakeFrom];
			++array[index];
		}

		// Get the biggest value around the index
		const getBiggerAroundIndex = (index) => {
			if (index === 0) return 1;
			else if (index === array.length - 1) return index - 1;
			else return array[index - 1] > array[index + 1] ? index - 1 : index + 1;
		}

		// While the array is not equalize
		while(!hasSameValue(array)) {
			wordOnIndex = [];
			for (let i = 0; i < array.length; i++) {
				if (array[i] < average) {
					takeRightOrLeft(i);
				}
			}
			// Display the iteration
			console.log(array);
		}

		return array;
	}
}

module.exports = algo;