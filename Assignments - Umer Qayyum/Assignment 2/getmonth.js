function getMonth() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    try {
        const input = document.getElementById('input').value;
    if (!months.includes(input)) {
      throw new Error(`Invalid month: ${input}`);
    }
  else{
    console.log("congratulations");
  }
}
    catch (error) {
        console.error(error.message);
      }
}