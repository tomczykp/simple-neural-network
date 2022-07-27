const {relu, sigmoid} = require('../activation_functions');
const {mean_sq_err} = require('../loss_functions');

describe('Activation functions tests', () => {
	test('RELU test', () => {
		expect(relu(0)).toStrictEqual(0);
		expect(relu(-4)).toStrictEqual(0);
		expect(relu(-0)).toStrictEqual(0);
		expect(relu(3)).toStrictEqual(3);
		expect(relu(0.1)).toStrictEqual(0.1);
	});

	test('Sigmoid test', () => {
		expect(sigmoid(-2)).toStrictEqual(0.11920292202211755);
		expect(sigmoid(0)).toStrictEqual(0.5);
		expect(sigmoid(1)).toStrictEqual(0.7310585786300049);
		expect(sigmoid(2)).toStrictEqual(0.8807970779778823);
	});
});

describe('Loss functions tests', () => {
	const xs = [1, 1, 2, 3, 4];
	const ys = [1, 1.2, 1.9, 3, 5];

	test('Mean square error test', () => {
		expect(mean_sq_err(xs)).toBeCloseTo(1.36, 2);
		expect(mean_sq_err(ys)).toBeCloseTo(2.15, 2);
	});
});
