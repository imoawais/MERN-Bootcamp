var s = "My name is Muhammad Awais Butt and im a Full Stack Web Developer"
function countVowels(s) {
  var c = s.match(/[aeiou]/gi);
  return c === null ? 0 : c.length;
}
console.log(countVowels(s))