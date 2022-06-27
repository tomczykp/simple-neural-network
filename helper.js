const add = (x) => (y) => x + y;
const inc = add(1);

const head = (xs) => xs[0];
const tail = (xs) => xs.slice(1);

module.exports = {
  head,
  tail,
};
