const arra = [1, 4, 5, 8, 2, 1];

// console.log(arra[0]);
// console.log(arra[1]);
// console.log(arra[2]);
// console.log(arra[3]);
// console.log(arra[4]);
// console.log(arra[5]);

class Array {
    constructor() {

    }

    forEach(cb) {
        // this = [1, 4, 5, 8, 2, 1]

        for(let i=0; i < this.length; i++) { // i=6, length = 6
            cb(this[i], i); // this[5] = 1, i=5, cb(1, 5)
        }
    }

    map(cb) {
        const temp = []; // [2, 8, 10, 16, 4, 2]

        // this = [1, 4, 5, 8, 2, 1]
        for(let i=0; i < this.length; i++) { // i=6, length = 6
            const value = cb(this[i], i); // this[5] = 1, i=5, cb(1, 5)
            temp.push(value);
        }
        
        return temp;
    }
}


// function callback(number, index) {
//     console.log(number);
// }

// arra.forEach(callback);

function anotherCallback(number, index) { // number = 1, index = 5
    const value = 2*number;
    // return value;
}

const newArra = arra.map(anotherCallback); // [2, 8, 10, 16, 4, 2]
console.log(newArra);

/*
    1
    4
    5
    8
    2
    1
*/

const ar = [1, 3];

const x = [...ar];

class User {
    constructor(x) {
        this.name = x;
    }
}

const counter = new User("riyad");
const counter2 = new User("Mamun");

console.log(counter.name);
console.log(counter2.name);