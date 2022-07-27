//
// Various loss functions
const { pow } = require("math");
const { avg } = require("./helper");

const mean_sq_err = (xs) => {
	const xavg = avg(xs);
	const n = xs.length;
	return xs.reduce((s, x) => s + pow(x - xavg, 2), 0) / n;
};

module.exports = { mean_sq_err }
