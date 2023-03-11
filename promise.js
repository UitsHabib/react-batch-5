// class Promise {
//     constructor(cb) {
//         cb(this.resolve, this.reject);
//     }

    // then(cb1) {
    //     this.resolve = cb1;
    //     return this;
    // }

    // catch(cb2) {
    //     this.reject = cb2;
    //     return this;
    // }
// }



const promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1000);
    }, 5000);
});


console.log("---------before-----------");

promise1
    .then(function (value) {
        console.log("hello, I am resolved");
        console.log(value);
    })
    .catch(function (err) {
        console.log("hello, I am rejected");
        console.log(err);
    });

console.log("---------after-----------");

/*
    execution context

    memory component  ------------------- code component
    ----------------------------------------------------
    promise1: promise(pending)              console.log("---------before-----------");
    success: f success () {...}
    error: f error() {...}
*/

/*
    ---------------console----------------

    ----------before------------
    ----------after------------
*/