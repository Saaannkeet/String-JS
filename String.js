// Count the Vowels
//que1:: You are given a string S containing both uppercase and lowercase letters.
//  You need to find out the number of vowels in the given string.


var Count_Vowels= (S) => 
{
 
const vowels = S.match(/[aeiou]/gi); 
  return vowels.length;

};
 
// Concatenate the Strings
// que2:: You are given two strings S1 and S2(containing both uppercase and 
//  lowercase letters), You need to retrun a string which is the 
// concatenation of both the given strings. 


var Concatenate_Strings = (S1, S2) => 
{
  
   var str=''
   str=S1+S2; 
  return str

};
 
// Find Length
//que3:: You are given a string S, and your task is to return the length of the 
// string S.


const findLength = (S) => 
{
    return S.length;
};
 

// Join Strings
//que4:: You are given two strings S and P, and your task is to concatenate them 
// and return the concatenated string.


const joinStrings = (S, P) => 
{
      let str=''
    str = S+P
    return str
    
};
 
// Reverse the String
//que5:: You are given a string S, Your task is to Reverse the string.String 
// can contain both upppercase lowercase letters. 


var Reverse_String = (str) => 
{
  return str.split("").reverse().join("");
  
};
 
// Match the Strings
//que6:: You are given two strings S1 and S2, Your task is to print YES if both 
// strings are same else print NO.


var String_Match = (S1,S2) => 
{
     
       if(S1==S2){
        return 'YES'
      }
      else{
        return 'NO'
      }
     
};
 
// String Replace
//que7:: You are given a string S, along with a pattern string and a text string.
//  You need to repalce the pattern string in S to the text string.


var Replace = (S, pattern , text) => 
{
        return S.replace(pattern,text)
      
};
 
// Split the String
//que8:: You are given a string S, Your task is to split the string with
//  respect to spaces.

var Split_the_string = (S) => 
{
  
 return S.split(" ");
};
 
// Count Characters
//que9:: You are given a string S, and your task is to return an array B(having a size of 2), 
// where B[0]contains the count of character A (uppercase) in string S and B[1]contains the
//  count of character D (uppercase) in string S.


const countCharacters = (S) => 
{
     var B = [2];
  let countA = 0;
  let countD = 0;
  let i;
  for (i = 0; i < S.length; i++) {
    if (S[i] === "A") {
      countA += 1;
    } else if (S[i] === "D") {
      countD += 1;
    }
  }
  B[0] = countA;
  B[1] = countD;
  return B;
};
 
// Plaindrome Check
//que10:: You are given a string S , Your task is to check wether the given string
//  is a Palindrome or not.A Palindrome is a string, which turnout same when 
//  read in reverse direction.Example: "naman" is a Palindrome.String can 
//  contain both upppercase lowercase letters.

 
var Palin_Check = (str) =>
{
	  let result= str.split('').reverse().join('');
	 if(result === str){
	   return 'True';
	 }
	 else
	 {
	   return 'False';
	 }
}

// Count the Heads
//que11:: Tina is given a string  S which contains the first letter of all the 
// student names in her class. She got a curiosity to check how many people 
// have their names starting from the same alphabet. So given a string  S ,
//  she decided to write a code that finds out the count of characters that 
//  occur more than once in the string.


var Count_Occ = (s) => 
{
    
      let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    });
        return (z.join(""));
  
};
 
// Find the Winner
//que12:: You are given a string S consisting of two letters A and D,where each
//  character represent the winner of N games played between Aditya and
//   Danish, where letter A represents the win of Aditya and letter D 
//   represents the win of Danish. You need to find out the that which 
//   player wins the maximum number of games or there is a draw between them.

 
var Game_Winner = (S) => 
{
 
   let countA= S.match(/[A]/gmi).length;
  let countD= S.match(/[D]/gmi).length;
  if(countA > countD)
  {
    return 'Aditya';
  }
   else if(countA < countD)
  {
    return 'Danish';
  }
  else
  {
    return 'Draw';
  } 
}
 
//que13:: Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in
//  the given string.


var Count_Vowels= (S) => 
{
  return S.match(/[aeiou]/gmi).length; 

};
var Count_Consonants= (S) => 
{
   
  return S.match(/[^aeiou]/gmi).length;   
};
 

