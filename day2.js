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
// 1.
// function func(...fns) {
//   let fnsNum = fns.length;

//   return (x) => {
//     let res = x;
//     for (let i = fnsNum - 1; i >= 0; i--) {
//       res = fns[i](res); // 這邊記得用上一個答案的 res 帶入
//     }
//     return res;
//   };
// }


// 2.
// function func(...fns) {
//   return (x)=>
//  fns.reduceRight((acc,fn)=>fn(acc),x)
// }


// 3.
//  function func(...fns){
//  return (x)=>fns.reduceRight(resWithFn,x)
//  }


// function resWithFn(acc,fun){
// return fun(acc)
// }


// 4. 非同步
function asyncfunc(...fns) {
  let fnsNum = fns.length;

  return async (x) => {
    let res = x;
    for (let i = fnsNum - 1; i >= 0; i--) {
      res =await fns[i](res); // 這邊記得用上一個答案的 res 帶入
    }
    return res;
  };
}


// console.log(func(add3, multiple2)(2))

// 普通函數
function add(a, b) {
  return a + b;
}

add(2, 3); // 5

// 柯里化版本
function curriedAdd(a) {
  
  return function(b) {
  console.log(a,b);

    return a + b;
  };
}

curriedAdd(2)(3); // 5
