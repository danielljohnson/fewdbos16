/* Arrays */
var names = ['Dan', 'Mike', 'Floyd'];

console.log(names[0]); // Dan
console.log(names[1]); // Mike
console.log(names[2]); // Floyd

console.log(names.length); // 3

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// function addDashes(arr) {}

// addDashes(['test1', 'test2', 'test3']); // 'test1-test2-test3'

// function getFirstAndLastItems(arr) {}

// getFirstAndLastItems([3, 4, 5, 1, 10]); // [3, 10]

/* Objects */
// var Truck = {
//     color: 'red',
//     make: 'ford',
//     model: 'F150'
// };

// console.log(Truck.color, Truck.make, Truck.model);

// var Truck = {
//     color: 'red',
//     make: 'ford',
//     model: 'F150',
//     drive: function() {
//         return 'vroom!';
//     }
// };

// console.log(Truck.drive());

/* Objects written as functions */
// function Truck(color) {
//     this.color = color;
//     this.make = 'ford';
//     this.model = 'F150';
//     this.drive = function() {
//         return 'vroom!';
//     };
// }

// var dansTruck = new Truck('red');
// var mikesTruck = new Truck('blue');

// console.log(dansTruck.color);
// console.log(mikesTruck.color);

// Twitter exercise

// What objects exist in a Twitter app, create those as JS
