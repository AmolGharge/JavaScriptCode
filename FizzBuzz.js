
function FizzBuzz (num) 
{
    for (let i = 1; i <= num; i++) 
    {
        let out = '';
        if (i % 3 === 0) out += 'Fizz';
        if (i % 5 === 0) out += 'Buzz';
        // if (i % 3 !== 0 && i % 5 !== 0) out += `${i}`;
       
        console.log(out || i);

        // console.log(`Value of ${i} is` + " " + out || i );


    }
}

FizzBuzz(15);














