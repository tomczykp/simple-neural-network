// Tests for helper functions
const {add, inc, head, tail, avg} = require("../helper")

function helperDummyTest() {
  let t = [ 1, 2, 3, 4, 5 ];
  expect(head(t)).toStrictEqual(1);
  expect(tail(t)).toStrictEqual([ 2, 3, 4, 5 ]);
}

test("Inc test", () => { expect(inc(4)).toStrictEqual(5); });
test("Helper Dummy check", helperDummyTest);

const nums = [ [ [ -1, 1 ], 0 ], [ [ -0, 5 ], 5 ], [ [ 1, -10 ], -9 ] ];

test.each(nums)("Add test value %j with result %j",
                (data, result) => expect(add(...data)).toStrictEqual(result));

test("Average test", () => {
  let t = [ 1, 2, 3, 4, 5.0 ];
  expect(avg(t)).toStrictEqual(3.0);
  t = [ 81, -2, 13, 4, -5 ];
  expect(avg(t)).toStrictEqual(18.2);
});
