const addf = (x) => (y) => x + y;
const inc = addf(1);
const add = (x, y) => x + y;

const head = (xs) => xs[0];
const tail = (xs) => xs.slice(1);

module.exports = {
  head,
  tail,
  inc,
  add
};
