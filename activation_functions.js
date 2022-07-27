//
// Various activation functions
const {exp} = require("math");

const relu = (x) => (x > 0) ? x : 0;
const sigmoid = (x) => 1 / (1 + exp(-x));

module.exports = {
  relu,
  sigmoid
}
