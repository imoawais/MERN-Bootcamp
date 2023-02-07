function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2023));
console.log(leapyear(2022));
console.log(leapyear(2021));
