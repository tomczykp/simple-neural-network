// Tests for helper functions
const {add, inc, head, tail} = require("../helper")

function helperDummyTest() {
  t = [ 1, 2, 3, 4, 5 ];
  expect(head(t)).toStrictEqual(1);
  expect(tail(t)).toStrictEqual([ 2, 3, 4, 5 ]);
}

test("Inc test", () => { expect(inc(4)).toStrictEqual(5); });
test("Helper Dummy check", helperDummyTest);

const nums = [ [ [ -1, 1 ], 0 ], [ [ -0, 5 ], 5 ], [ [ 1, -10 ], -9 ] ];

test.each(nums)("Add test value %j with result %j",
                (data, result) => expect(add(...data)).toStrictEqual(result));
