 // Write your algorithm here
 const str =("string")
 const isPalindrome =(newStr) => {
   newStr= newStr.toLowerCase()
   for (let i = 0; i < newStr.length / 2; i++){
     if (newStr[i] !== newStr[newStr.length - 1 - i]){
       return false;
     }
   }
   return true
 }

console.log(isPalindrome(str))


/* 
 Add your pseudocode here
This should be in a way such, whenever the word is read backwards, it hs the same wording as from the start.
For example, civic read forward and backwards sounds similar

*/

/*
 Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 // add your own custom tests in here
 console.log('Expecting: true');
 console.log('=>', isPalindrome('civic'))

console.log(' ')
 

 console.log("Expecting: true");
 console.log("=>", isPalindrome("racecar"));

 console.log("");

 console.log("Expecting: false");
 console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;