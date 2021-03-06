interface BmiArgs {
	heightCm: number;
	weightKg: number;
}

const parseBmiArguments = (args: Array<string>): BmiArgs => {
	if (args.length < 4) {
		throw new Error('Not enough arguments.');
	} else if (args.length > 4) {
		throw new Error('Too many arguments.');
	} else if (args[2] === '' || args[3] === '') {
		throw new Error('Arguments are not numbers.');
	} else if (isNaN(Number(args[2])) || isNaN(Number(args[3]))) {
		throw new Error('Arguments are not numbers.');
	}

	return {
		heightCm: Number(args[2]),
		weightKg: Number(args[3]),
	};
};

const calculateBmi = (heightCm: number, weightKg: number): string => {
	const meter: number = heightCm / 100;
	const bmi: number = weightKg / Math.pow(meter, 2);

	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		return 'Normal (healthy weight)';
	} else if (bmi >= 25 && bmi <= 29.9) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
};

if (process.argv[1].includes('bmiCalculator')) {
	try {
		const { heightCm, weightKg } = parseBmiArguments(process.argv);
		console.log(calculateBmi(heightCm, weightKg));
	} catch (error: unknown) {
		let errorMessage = 'Something went wrong.';
		if (error instanceof Error) {
			errorMessage += ` Error: ${error.message}`;
		}
		console.log(errorMessage);
	}
}

export default calculateBmi;
