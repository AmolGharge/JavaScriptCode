const myCountries=["India","Germany","UAE","Singapore","UK","Canada","Australia"]
                //    0         1      2       3         4      5       6

// myCountries.push('Sweden')  // Add to last : "India","Germany","UAE","Singapore","UK","Canada","Australia","Sweden"

// myCountries.pop() // Remove Last : "India","Germany","UAE","Singapore","UK","Canada"

// myCountries.unshift('Japan')   // Add to first : "Japan", "India","Germany","UAE","Singapore","UK","Canada","Australia"

// myCountries.shift()     // Remove first item :  "Germany","UAE","Singapore","UK","Canada","Australia"

// for (var element in myCountries )    // Get index No : 0,1,2,3,4,5,6

//  for (var element of myCountries )  // Get List  "India","Germany","UAE","Singapore","UK","Canada","Australia"
// console.log(element)


//-----------------SPLICE-----------------
// const countries2 = myCountries.splice(3,2)  // Get "Singapore","UK"
// console.log(countries2)
// const countries = myCountries.splice(0,3)  // Get "India","Germany","UAE"
// const countries = myCountries.splice(1,2,"Nepal","France")  // Shows "Germany","UAE" , Adds  "Nepal","France" after "India".
// const countries = myCountries.splice(3) // Shows 'Singapore', 'UK', 'Canada', 'Australia'
// console.log(countries)


//-----------------SLICE-----------------

// const countries = myCountries.slice(2,4) //  Shows 'UAE', 'Singapore'
// const countries = myCountries.slice(1,5) //'Germany', 'UAE', 'Singapore', 'UK'
// const countries = myCountries.slice(-2) // Shows  'Canada', 'Australia'
// const countries = myCountries.slice(3,4)  // Shows 'Singapore'
// const countries = myCountries.slice(3)  // Shows 'Singapore', 'UK', 'Canada', 'Australia'
// console.log(countries)



console.log(myCountries)





    
//     ----------------------

// let j = "Outer J Variable"

// function Outer() {
//     let k = "Inner K Variable"
//     document.write(k + "<br>")
//     document.write(j + "<br>")

//     function Inner() {
//         let m = "Inner M Variable"
//         document.write(m + "<br>")
//         document.write(j)
//     }
//     Inner ()
    
//     document.write(m + "<br>") // will not display 
    
// }
// Outer()

//     ----------------------

// var a = 20;
// let a = 10;


// console.log(a) // will show error 'a' has already been declared

//     ----------------------