function testResults() {
// accepting user input and displaying it on console
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let f_pet = document.getElementById("f_pet").value;
    
    console.log(`
    First name: ${fname}
    Last name: ${lname}
    Favorite Pet: ${f_pet}
    `);
}

