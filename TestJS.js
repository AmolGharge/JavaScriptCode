import React from 'react'

function App() {
    // const myCountries=['India','Germany','UAE','Singapore', 'Japan', 'Maldives']
    // const myStates=['MH','Goa','KA','MP', 'UP']

    // for (const i in myCountries) // 0,1,2,3,4,5 gives index
    // console.log(i)

    // const Countries = myCountries.slice(2,3) // UAE ONLY
    // console.log(Countries)

    // const Countries = myCountries.splice(2,3)  // UAE, SINGAPORE, JAPAN
    // console.log(Countries)
    // console.log(myCountries)

    // const Countries = myCountries.join("")  // IndiaGermanyUAESingaporeJapanMaldives
    // console.log(Countries)

    // const Countries = myCountries.reverse() 
    // console.log(Countries)

    // const Countries = myCountries.concat(myStates) 
    // const Countries = [...myCountries, ...myStates]
    // console.log(Countries)

    // const movements =[66, 166, -266, 366, -466, -566, 666]
    // console.log(movements)

    // for (let i of movements) {

    //     if (i > 0) {
    //         console.log(`Amount Deposited is ${i}`)
    //     }
    //     else {
    //         console.log(`Amount Withdrew is ${Math.abs(i)}`)
    //     }

    // }

    // movements.forEach(function(i) {
    //              if (i > 0) {
    //                 console.log(`Amount Deposited is ${i}`)
    //             } else {
    //                 console.log(`Amount Withdrew is ${Math.abs(i)}`)
    //             }

    // });

//     let sum = 0
//     movements.forEach(function(i) {
//         sum += i;
//         console.log(sum)
// });


// 🙋 ---- Return array with modified values using for Of

// const numbers = [66, 33, 11, 55, 44, 88]
// let cal = [];
// for (const i of numbers) cal.push (i * 3)
//     console.log(cal)

// 🙋 ---- Return array with modified values using Map

// const currConvert = numbers.map(function(curVal){
//     return curVal * 3
// });
// console.log(currConvert)

// 🙋 ---- Return array with modified values using Map & Arrow Function

// const currConvert = numbers.map(curVal => curVal * 3)
// console.log(currConvert)


// const movements =[66, 166, -266, 366, -466, -566, 666]
// console.log(movements)

// const currConvert = movements.map((curVal,i) => 
//   `Transaction ID ${i+1} : You ${curVal > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(curVal)}`
// )
// console.log(currConvert)

// 🙋 ---- Filter Method

const numbers =[66, 166, -266, 366, -466, -566, 666]

// const currConvert = numbers.filter(function(curElem) {
//     return curElem > 0
// })

    // -- We can also write using Arrow Function

    // const currConvert =  numbers.filter(curElem => curElem > 0)
    // console.log(numbers)
    // console.log(currConvert)

    // const nums =[]
    // for (let i of numbers) 
    // if (i > 0)  nums.push(i) 

    // console.log(nums)

    //--------- Min and Max number -----------

    // const maxNum = Math.max(...numbers)
    // const minNum = Math.min(...numbers)
    // console.log(maxNum)
    // console.log(minNum)

    

}

export default App;