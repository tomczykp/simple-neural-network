// Tests for matrix handling functions
const {add, sub, mul, transpose, scale} = require("../matrix")

// GETTING NON-EXPORTED (aka not public) FUNCTION
const rewire = require('rewire');
const _matrix_ = rewire("../matrix.js");
const column = _matrix_.__get__("column");
const row = _matrix_.__get__("row");

describe("Math function tests", () => {
  const m1 = [ [ 3, 3 ], [ 3, 3 ] ];
  const m2 = [ [ 1, 2 ], [ 2, 2 ] ];
  const m3 = [ [ 2, 1 ], [ 1, 1 ] ];

  test("Transpose test", () => {
	expect(transpose(m1)).toStrictEqual(m1);
	expect(transpose(m2)).toStrictEqual(m2);
	expect(transpose(m3)).toStrictEqual(m3);
	expect(transpose([ [ 3, 5 ], [ 2, 1 ] ])).toStrictEqual([
	  [ 3, 2 ], [ 5, 1 ]
	]);
	expect(transpose([ [ 1, 6, 5 ], [ 0, 9, 2 ], [ 7, 3, 4 ] ])).toStrictEqual([
	  [ 1, 0, 7 ], [ 6, 9, 3 ], [ 5, 2, 4 ]
	]);
  });

  test("Add test", () => {
	expect(add(m2, m3)).toStrictEqual(m1);
	expect(() => {add(m1, [ [ 1, 3 ] ])})
		.toThrow("Invalid shape of matrixes, num of rows");
	expect(() => {add(m1, [ [ 1, 3 ], [ 1, 3, 4 ] ])})
		.toThrow("Invalid shape of matrixes, num of cols");
  });

  test("Sub test", () => {
	expect(sub(m1, m2)).toStrictEqual(m3);
	expect(() => {sub(m1, [ [ 1, 3 ] ])})
		.toThrow("Invalid shape of matrixes, num of rows");
	expect(() => {sub(m1, [ [ 1, 3, 4 ], [ 1, 2 ] ])})
		.toThrow("Invalid shape of matrixes, num of cols");
  });

  test("Function invers test", () => {
	expect(sub(add(m1, m2), m2)).toStrictEqual(m1);
	expect(add(sub(m1, m2), m2)).toStrictEqual(m1);
  });

  test("Scaling test", () => {
	expect(scale(m2, 2)).toStrictEqual([ [ 2, 4 ], [ 4, 4 ] ]);
	expect(scale(m2, 1 / 2)).toStrictEqual([ [ 0.5, 1 ], [ 1, 1 ] ]);
	expect(scale(m1, 3.5)).toStrictEqual([ [ 10.5, 10.5 ], [ 10.5, 10.5 ] ]);
  });

  test("Mul tests", () => {
	expect(mul(m1, m2)).toStrictEqual([ [ 9, 12 ], [ 9, 12 ] ]);
	expect(mul(m1, m3)).toStrictEqual([ [ 9, 6 ], [ 9, 6 ] ]);
	expect(mul(m3, m2)).toStrictEqual([ [ 4, 6 ], [ 3, 4 ] ]);
	expect(mul(m2, m3)).toStrictEqual([ [ 4, 3 ], [ 6, 4 ] ]);
	expect(mul(m1, m1)).toStrictEqual([ [ 18, 18 ], [ 18, 18 ] ]);
  });
});

describe("Access function tests", () => {
  const m1 = [ [ 3, 3 ], [ 3, 3 ] ];
  const m2 = [ [ 1, 2 ], [ 2, 2 ] ];
  const m3 = [ [ 2, 1 ], [ 1, 1 ] ];

  test("Row tests", () => {
	expect(row(m1, 0)).toStrictEqual([ 3, 3 ]);
	expect(row(m2, 1)).toStrictEqual([ 2, 2 ]);
	expect(row(m3, 1)).toStrictEqual([ 1, 1 ]);
  });

  test("Column tests", () => {
	expect(column(m1, 1)).toStrictEqual([ 3, 3 ]);
	expect(column(m2, 0)).toStrictEqual([ 1, 2 ]);
	expect(column(m3, 0)).toStrictEqual([ 2, 1 ]);
  });
});
