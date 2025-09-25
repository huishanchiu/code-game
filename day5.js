/*5. JavaScript: Inventory List
Implement a function called inventoryList that maintains a collection of unique item names and provides the following methods:
1.add(name) - Adds the item with the given name to the collection if it does not already exist
2.remove(name) - Removes the item with the given name from the collection if it exists
3.getList - Returns an array of all item names in the order they were added
Your implementation will be tested with several inputs, and the results will be printed to standard output.
The testing code will join the strings returned by getList) with commas and print the result, If getList returns an empty array, "No Items" will be printed.
Constraints:
* The size of the collection will not exceed 10 at any point.
* All names passed to add(name) and remove(name) are non-empty.
*/

//1. Set()

function inventoryList (){
    const MAX = 10
    let items = new Set()
  return{
     add(name){
        const trimedName = name.toString.trim()
        if(!trimedName) return
        if(items.size >= MAX) return
    if(!items.has(name)){
      items.add(name)
}
  },
    remove(name){
   items.delete(name)
  },
     getList(){
     return Array.from(items)
   }

   }
 }
// function inventoryList (){
//     let items = []
//   return{
//      add:function(name){
//     if(!items.includes(name)){
//       items.push(name)
// }
//   },
//     remove:function(name){
//    items = items.filter((item)=>{
//      return item!==name
//    })
//   },
//      getList:function(){
//      return items
//    }

//   }
// }


const inventory =inventoryList()  
inventory.add("apple") 
inventory.add("banana") 


console.log(inventory.getList() )// ["apple"]
