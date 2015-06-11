// Data for the first set of questions
var shoppingList = [{
    item: 'Salmon',
    price: 14.99,
    quantity: 2
},{
    item: 'Brown Rice',
    price: 5.99,
    quantity: 1
},{
    item: 'Broccolini',
    price: 2.99,
    quantity: 4
}];

// Using the shoppingList array, display the following pieces of information

// 1. All the item names (ex. Salmon, Brown Rice, Broccolini)

function allNames(shoppingList) {
    // your code here
}

allNames(shoppingList);

// 2. The quantity of the Brown Rice (ex. 1 bag of Brown Rice)

function getQuantity(item) {
    // your code here
}

console.log(getQuantity(shoppingList));

// 3. The price of the Broccolini (ex. The Broccolini costs $2.99)

// 4. The total cost of all the items (ex. The total cost is $47.93)

// 5. The name of the most expensive item (ex. The most expensive item is Salmon)

// Data for the second set of questions
var Task = function(name, category, status) {
    this.name = name;
    this.category = category;
    this.status = status;
};

var Category = function(name) {
    this.name = name;
};

var Status = {
    open: 0,
    inProgress: 1,
    complete: 2
};

var tasks = [];
var categories = [];

// 6. Create two categories, each with a different name (hint: this is just like the different colored Truck example from class)

// 7. Create two tasks, each one with a name, a category (which is a reference to one of the categories you created), and a status number which you can use the Status object for

// 8. Add your categories and tasks to the arrays above using the built in push() method (ex. some_array.push(item) will add item on to the end of some_array)

// 9. Create a function that will display the task name and category name for each task in the tasks array

// 10. Create a function that will display all tasks that have a given status