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
