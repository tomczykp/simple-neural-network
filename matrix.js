//
//
//

const overElemOp = (m1, m2, func) => {
  if (m1.length != m2.length)
    throw "Invalid shape of matrixes";

  let res = [];
  m1.forEach((row, i) => res.push(row.map((x, j) => func(x, m2[i][j]))));
  return res;
};

const add = (m1, m2) => overElemOp(m1, m2, (x, y) => x + y);
const sub = (m1, m2) => overElemOp(m1, m2, (x, y) => x - y);
const scale = (m1, a) => m1.map((row) => row.map((x) => a * x));

const mul = (m1, m2) => { return []; };

module.exports = {
  add,
  sub,
  mul,
  scale
}
