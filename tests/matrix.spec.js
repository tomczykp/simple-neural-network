// Tests for helper functions
const {add, sub, mul, scale} = require("../matrix")

const m1 = [ [ 3, 3 ], [ 3, 3 ] ];
const m2 = [ [ 1, 2 ], [ 2, 2 ] ];
const m3 = [ [ 2, 1 ], [ 1, 1 ] ];

test("Add test", () => expect(add(m2, m3)).toStrictEqual(m1));
test("Sub test", () => expect(sub(m1, m2)).toStrictEqual(m3));

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
