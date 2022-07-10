//
// Implementatnio of basic matrices operations

const overElemOp = (m1, m2, func) => {
  if (m1.length != m2.length)
    throw new Error("Invalid shape of matrixes, num of rows");

  m1.forEach((row1, i) => {
    const row2 = m2[i];
    if (row1.length != row2.length)
      throw new Error("Invalid shape of matrixes, num of cols");
  });

  let res = [];
  m1.forEach((row, i) => res.push(row.map((x, j) => func(x, m2[i][j]))));
  return res;
};

const row = (m, i) => m[i];
const column = (m, i) => m.map((row) => row[i]);
const add = (m1, m2) => overElemOp(m1, m2, (x, y) => x + y);
const sub = (m1, m2) => overElemOp(m1, m2, (x, y) => x - y);
const scale = (m1, a) => m1.map((row) => row.map((x) => a * x));
const transpose = (m1) => m1[0].map((_, ci) => m1.map((row) => row[ci]));

const mul = (m1, m2) => {
  let result = new Array(0);
  return m1.map(
      (row, i) => transpose(m2).map(
          (col) => row.reduce((acc, rI, index) => acc += rI * col[index], 0)));
};

module.exports = {
  add,
  sub,
  mul,
  scale,
  transpose
};
