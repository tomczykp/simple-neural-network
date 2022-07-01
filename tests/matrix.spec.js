// Tests for helper functions
const {add, sub, mul} = require("../matrix")

const m1 = [ [ 3, 3 ], [ 3, 3 ] ];
const m2 = [ [ 1, 2 ], [ 2, 2 ] ];
const m3 = [ [ 2, 1 ], [ 1, 1 ] ];

test("Add test", () => { expect(add(m2, m3)).toStrictEqual(m1); });

test("Sub test", () => { expect(sub(m1, m2)).toStrictEqual(m3); });

test("Function invers test", () => {
  expect(sub(add(m1, m2), m2)).toStrictEqual(m1);
  expect(add(sub(m1, m2), m2)).toStrictEqual(m1);
});
