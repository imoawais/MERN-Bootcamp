function isPalindrome(str) {
    let string = str.toLowerCase().replace(/[\W_]/g, '');
    let reverseString = string.split('').reverse().join('');
    if (reverseString === string) {
      console.log(`"${str}" is a palindrome.`);
      return true;
    } else {
      console.log(`"${str}" is not a palindrome.`);
      return false;
    }
  }
  
  let testString = "madam";
  isPalindrome(testString);
  