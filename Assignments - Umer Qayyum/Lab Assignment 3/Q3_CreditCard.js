// FOR A VISA CARD VERIFICATION
// It should be 13 or 16 digits long.
// It should start with 4.
// If the cards have 13 digits the next twelve digits should be any number between 0-9.
const pattern = /(^4[0-9]{12}(?:[0-9]{3})?$)/g;
let validate = (str) =>
{
    const pattern = /(^4[0-9]{12}(?:[0-9]{3})?$)/g;
    return pattern.test(str);
}
console.log(validate("4555279860457"));
