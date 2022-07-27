const adder = (x) => (y) => x + y;
const inc = adder(1);
const add = (x, y) => x + y;

const head = (xs) => xs[0];
const tail = (xs) => xs.slice(1);
const avg = (xs) => xs.reduce((acc, x) => acc + x, 0) / xs.length;

// function avg(tab) {
//   let suma = 0;
//   let n = tab.length;
//   for (let i = 0; i < n; i++) {
//     suma += tab[i];
//   }
//   return suma / n;
// }

module.exports = {
  head,
  tail,
  inc,
  add,
  adder,
  avg
};
