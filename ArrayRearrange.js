
// function App(A) {

// let index = A[0]
// const y = A.splice(index).concat(A)
// const AS = y.join('')
// }

// App([4,3,4,3,1,2])   // 124343
// App([3,2,1,6])    // 6321
// App([2, 3, 4, 1, 6, 10]) // 4161023
// App([6, 1, 3, 9, 8, 10, 6, 0, 4, 5])  // 60456139810

// ----------------------------------------

// let last = function(array, n) {
//     if (array == null) {
//         return void 0;
//     }

//     if (n == null) {
//         return [array[array.length - 1]] // for '[]' output
//         // return array[array.length - 1] // for 'without []' output
//     }
    
//     return array.slice(Math.max(array.length-n,0))
    
// }

// console.log(last([7, 9, 0, -2]));  // output [-2]
// console.log(last([7, 9, 0, -2],1));  // output [-2]
// console.log(last([7, 9, 0, -2],2));  // output [0, -2]
// console.log(last([7, 9, 0, -2],3)); // output [9, 0, -2 ]
// console.log(last([7, 9, 0, -2],4)); // output [9, 0, -2 ]
// console.log(last([7, 9, 0, -2],6)); // outpput [ 7, 9, 0, -2 ]

// ----------------------------------------

function AddDash(A) {

    for (let i = 1 ; i<A.length; i++) {

        if (A[i] %2 === 0)  {
            A.push('-')
        }

        else 
        A.push()

    }

}

