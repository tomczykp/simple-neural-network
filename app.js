const { relu, sigmoid } = require('./activation_functions');
const { mean_sq_err } = require('./loss_functions');
const { add, mul } = require('./matrix')

function main(xs) => {
	const weights = genWeights(xs.length);
	const activation_function = relu
	const result = calc(xs, weights, activation_function);

	console.log(`Result: ${result}`);
}

const genWeights = (num) => {
	let we = [ 0 * num ];

}

const forward = (xs, W, fun) => {
	console.log('HEHHEs');
	return 10;
}

const xs = [ 1, 2, 3, 4, 5, 6 ];
main(xs);
