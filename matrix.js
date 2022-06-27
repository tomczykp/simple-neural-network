const overElemOp = (m1, m2, func) => {
  if (m1.length != m2.length)
    throw "Invalid shape of matrixes";

  return m1.map((row, i) => { row.map((x, j) => func(x, m2[i][j])); });
};

const add = (m1, m2) => overElemOp(m1, m2, (x, y) => x + y);
const sub = (m1, m2) => overElemOp(m1, m2, (x, y) => x - y);

const mul = (m1, m2) => {
  return m1.map((row, rowI) => {row.reduce((x, xI) => x * m2[xI][rowI])});
};

module.export = {
  add,
  sub,
  mul
}
