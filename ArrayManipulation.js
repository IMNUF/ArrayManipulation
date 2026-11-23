// Create an empty array called shoppingList.
// Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// Write a function called removeLastItem that removes the last item from the shoppingList array.
// Write a function called displayList that logs all items in the shoppingList array to the console.


// let shoppingList = [];

// function addItem (item){
//      if (!shoppingList.includes(item)) {
//         shoppingList.push(item);
//     }

// }

// function removeLastItem(){
//   shoppingList.pop();  
// }

// function displayList(){
//   console.log(shoppingList);  
// }
// // calling functions

// addItem("powder");
// addItem("flour");
// addItem("sand");
// addItem("grain");
// displayList();
// removeLastItem();
// displayList();

// Modify the addItem function to only add the item if it is not already in the shoppingList array.
// Write a function called filterItems that takes a search term as a parameter and returns all 
// items in the shoppingList that contain that search term (case-insensitive).


// function filterItems(searchTerm) {
//     return shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())
//     );
// }

// // calling functions

// addItem("powder");
// addItem("flour");
// addItem("sand");
// addItem("grain");

// displayList();

// console.log(filterItems("fl"));
// console.log(filterItems("GRA"));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// EMPTY ARRAY
const shoppingList = [];

// SELECTING HTML ELEMENTS 
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const shoppingListElement = document.getElementById("shoppingList");

// ADD ITEMS
function addItem() {
    const item = itemInput.value.trim();

    if (item !== "" && !shoppingList.includes(item)) {
        shoppingList.push(item);
    }

    itemInput.value = "";

    displayList();
}

// DISPLAY SHOPPING LIST
function displayList() {
    shoppingListElement.innerHTML = "";

    shoppingList.forEach(function(item) {
        const listItem = document.createElement("li");

        listItem.textContent = item;

        shoppingListElement.appendChild(listItem);
    });
}

// REMOVE LAST ITEM
function removeLastItem() {
    shoppingList.pop();

    displayList();
}

// ADD EVENT LISTENERS 
addButton.addEventListener("click", addItem);
removeButton.addEventListener("click", removeLastItem);
