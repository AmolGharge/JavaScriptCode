
// // Find the smallest positive integer that does not occur in a given sequence

// function solution(A) {
//     // only positive values, sorted
//     A = A.filter(x => x >= 1).sort((a, b) => a - b)

//     let x = 1

//     for(let i = 0; i < A.length; i++) {
//         // if we find a smaller number no need to continue, cause the array is sorted
//         if(x < A[i]) {
//             return x
//         }
//         x = A[i] + 1
//     }

//     return x
// }

// console.log(solution([3, 4, -1, 1]));  // Answer is 2
// console.log(solution([1, 2, 0])); // Answer is 3


function smallest (A) {

    A=A.filter(x=>x>=1).sort((a,b)=>a-b);

    for (let i=0; i<=A; i++) {
        
    }

}

smallest(4,3,0)