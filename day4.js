// ### 4\. Price check

// | Product | Actual | Expected Error |  |
// |---|---|---|---|
// | eggs | 2\.89 | 2\.89 |  |
// | eggs | 2\.99 | 2\.89 | 1 |
// | cheese | 5\.97 | 5\.79 |  |
// | milk | 3\.29 | 3\.L9 |  |

// There is a shop with old-fashioned cash registers where prices are entered manually, leading to potential errors. Given a list of items and their correct prices, compare them to the prices entered at the time of sale and determine the number of errors.
// Example

// products = \['eggs, 'milk, 'cheese'\]
// productPrices = \[2.89, 3.29, 5.79\]
// productSold = \['eggs', 'eggs', 'cheese', 'milk'\]
// soldPrice = \[2.89, 2.99, 5.97, 3.29\].

// Price
// The second sale of eggs has the wrong price, as does the sale of cheese. There are 2 errors in pricing.
// Function Description
// Complete the function priceCheck in the editor with the following parameters):
// string productsin\]: each products\[l/ is the name of an item for sale float productPrices(n\]: each
// productPrices\[l\] is the price of products\[i\] string productSold\[m\]: each productSoldU\]
// is the name of a product sold
// float soldPrice\[m\]: each soldPrice()
// contains the sale price recorded for productSold).


const products = ['eggs', 'milk', 'cheese' ]
const productPrices = [2.89, 3.29, 5.79]
const productSold = ['eggs', 'eggs', 'cheese', 'milk']
const soldPrice = [2.89, 2.99, 5.97, 3.29]

// 1. Map
function  priceCheck(){
  const priceMap = new Map()
    for(let i = 0;i<products.length;i++){
     priceMap.set(products[i],productPrices[i])
  }

    let errors = 0
  for(let i = 0;i<productSold.length;i++){
    if( priceMap.get(productSold[i])!==soldPrice[i] ){
       errors++
    }
  }
 return  errors
}

// 2. map
// function  priceCheck(){
//   const priceMap = {}
//   for(let i = 0;i<products.length;i++){
//      priceMap[products[i]]=productPrices[i]
//   }
//   let errors = 0
//   for(let i = 0;i<productSold.length;i++){
//     if( priceMap[productSold[i]]!==soldPrice[i] ){
//        errors++
//     }
//   }
//  return  errors
// }

// 3. for 迴圈
// function  priceCheck(){
//     let error = 0
//     for(let i = 0;i< productSold.length;i++){
//         const productIndex =products.indexOf(productSold[i])
//         const correctPrice = productPrices[productIndex]
//          if(soldPrice[i]!==correctPrice){
//            error++
//          }
//     }
//     return error
// }


// function priceCheck() {
//   const priceMap = {}; // 建立一個查表
//   for (let i = 0; i < products.length; i++) {
//     priceMap[products[i]] = productPrices[i];
//   }
// console.log("priceMap",priceMap)
//   let error = 0;
//   for (let i = 0; i < productSold.length; i++) {
//     if (soldPrice[i] !== priceMap[productSold[i]]) {
//       error++;
//     }
//   }
//   return error;
// }

// console.log( priceCheck())

/*
解題思路：
一開始看到很多名詞會混亂，但會發現，我們要比對的就是「真實價格」(productPrices)和「賣出價格」(soldPrice)
1. 所以目標是在 productSold 裡面中找出每個元素的真實價格
2. 用 productSold 跑 for 迴圈，查出各元素在 products 裡的 index
3. 用該 index 去 productPrices 找出真實價格
4. 比對真實價格和 soldPrice 是否相同
5. 不同就 error++，最後回傳 error
*/

