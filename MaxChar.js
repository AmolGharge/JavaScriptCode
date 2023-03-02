function maxCharacter(str){
    const charMap = {};
    let max = 0, maxChar = "";
  
    for(let char of str)
    {
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    for(let char in charMap)
    {
      if(charMap[char] > max)
      {
        max = charMap[char];
        maxChar = char;
      }
    }
    
    return maxChar;
  }

//   let maxResult = maxCharacter("faaassassgdgaweargg");  // Max Character is 'a'
  let maxResult = maxCharacter([3, 's', 's', 's', 2, 3, 's', 3, 's', 2, 4, 9, 3]); // Max Character is '6'
  console.log(maxResult);


