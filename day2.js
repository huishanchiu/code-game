// Composite Function

// Please write a function that takes multiple functions as arguments
// and return a composition function.

// Please note that the execute order is right to the left.
// eg: func(add3, multiple2)(2) // return 7
// eg: func(add3, multiple2, add5)(10); // return 33

//
// You don't need to care about the implement of add3 or multiple2.
// ﻿﻿Just focus on the composition function.
// function add3(n) {
//   return n + 3;
// }

function add3(n) {
  return n + 3;
}

function multiple2(n) {
  return n * 2;
}

function func(...fns) {
  let fnsNum = fns.length;

  return (x) => {
    let res = x;
    for (let i = fnsNum - 1; i >= 0; i--) {
      res = fns[i](res); // 這邊叫得用上一個答案的 res 帶入
    }
    return res;
  };
}

console.log(func(add3, multiple2)(2));
