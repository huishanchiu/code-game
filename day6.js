/**
 * Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

Input: [10, 20, 10, 30, 20]
Output: [10, 20, 30]
 */

/**1. Set */
function removeDuplicate(arr) {
  let res = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!res.has(arr[i])) {
      res.add(arr[i]);
    }
  }
  return Array.from(res);
}
/**
 * ✨ 關鍵
 * Set 的 .has() 和 .add() 幾乎是 O(1) 的速度
 * 每個元素只處理一次
 * 📦 如果陣列有 n 個元素，總共做了大約 n 次操作 → O(n)
 */

/**1. includes */
function removeDuplicate(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
/**
 * ✨ 關鍵
 * res.includes(arr[i]) 每次都要從頭走一遍 → O(m)
 * m 是目前 res 的長度，從 0 一路增長到 n
 * 📦 如果陣列有 n 個元素：
 * 	第 1 次 includes 檢查 0 個
 *  第 2 次檢查 1 個
 * 	第 n 次檢查 n-1 個
 *  總共：0 + 1 + 2 + ... + n-1 ≈ n² / 2 次檢查→ O(n²)
 */

console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

/**
 * 時間複雜度
 * 在電腦科學中，我們用「時間複雜度」來表示一段程式對資料量（n）的敏感程度。
 * 
 * O(1) | 常數時間 | 不管資料多大，都只需要 1 步就完成
   O(n) | 線性時間 | 資料多一倍，執行時間也多一倍
   O(n²)| 平方時間 | 資料多一倍，執行時間變成原本的 4 倍（指數型成長，會很慢）
 */

/**1. Set v.s. includes */
const arr = Array.from({ length: 100000 }, (_, i) => i % 1000);

console.time("Set");
function withSet(arr) {
  let res = new Set();
  for (let i = 0; i < arr.length; i++) {
    res.add(arr[i]);
  }
  return Array.from(res);
}
withSet(arr);
console.timeEnd("Set");

console.time("Includes");
function withIncludes(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}
withIncludes(arr);
console.timeEnd("Includes");
