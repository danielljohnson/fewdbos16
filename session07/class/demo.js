/* Arrays */
// var names = ['Dan', 'Mike', 'Floyd'];

// console.log(names[0]); // Dan
// console.log(names[1]); // Mike
// console.log(names[2]); // Floyd

// console.log(names.length); // 3

// for (var i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// function addDashes(arr) {
//     var newString = '';

//     for (var i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1) {
//             newString += arr[i];
//         } else {
//             newString += arr[i] + '-';
//         }
//     }

//     return newString;
// }

// console.log(addDashes(['test1', 'test2', 'test3'])); // 'test1-test2-test3'

// function getFirstAndLastItems(arr) {
//     return arr[0] + ', ' + arr[arr.length - 1]; 
// }

// console.log(getFirstAndLastItems([3, 4, 5, 1, 10])); // '3, 10'

/* Objects */
var Truck = {
    color: 'red',
    make: 'ford',
    model: 'F150'
};

console.log(Truck.color, Truck.make, Truck.model);

// object literal
var Truck = {
    color: 'red',
    make: 'ford',
    model: 'F150',
    drive: function() {
        return 'vroom!';
    }
};

console.log(Truck.drive());

/* Objects written as functions */
function Truck(color) {
    this.color = color;
    this.make = 'ford';
    this.model = 'F150';
    this.drive = function() {
        return 'vroom!';
    };
}

var dansTruck = new Truck('red');
var mikesTruck = new Truck('blue');

console.log(dansTruck.color);
console.log(mikesTruck.color);
