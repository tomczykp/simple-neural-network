const overElemOp = (m1, m2, func) => {
  if (m1.length != m2.length)
    throw "Invalid shape of matrixes";

  return m1.map((row, i) => { row.map((x, j) => func(x, m2[i][j])); });
};

const add = (m1, m2) => overElemOp(m1, m2, (x, y) => x + y);
const sub = (m1, m2) => overElemOp(m1, m2, (x, y) => x - y);

const mul = (m1, m2) => {
  N = m1.length;
  res = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res[i][j] = 0;
      for (let k = 0; k < N; k++)
        res[i][j] += mat1[i][k] * mat2[k][j];
    }
  }

  for (row of m1) {
    for () {
    }
  }

  return res;
  //  return m1.map((row, rowI) => {row.reduce((x, xI) => x * m2[xI][rowI])});
};

module.export = {
  add,
  sub,
  mul
}
