let uppercase = (str) =>{
    const pattern = (/[/A-Z]/g);
    return pattern.test(str[0]);
}
console.log(uppercase("hello"));