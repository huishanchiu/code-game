/**移動到右側

 *  輸入
 nums = [0, 1, 0, 3, 12]
 
 輸出
 [1, 3, 12, 0, 0]
 */

// function moveToRight(arr) {
//   let zeroArr = [];
//   let nonZeroArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroArr.push(arr[i]);
//     } else {
//       nonZeroArr.push(arr[i]);
//     }
//   }

//   console.log([...nonZeroArr, ...zeroArr]);
// }

/**
 *
 * @param {nonZeroIndex} 記錄每個不為0的數字有多少
 * @param {Two Pointers}
 * @todo 複習
 * 先把不為 0 的都排好後，nonZeroIndex 如果還小於 arr 長度，就補 0
 */
function moveToRight(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }
  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex] = 0;
    nonZeroIndex++;
  }
  console.log(arr);
}

moveToRight([0, 1, 0, 3, 0, 0, 12, 0, 0]);
