// Function to greet the user and calculate age in 5 years
function greetUser() {
    let name = prompt("What is your name?");
    let age = parseInt(prompt("How old are you?"));
    
    if (!isNaN(age)) {
        let futureAge = age + 5;
        alert(`Hello, ${name}! In 5 years, you will be ${futureAge} years old.`);
    } else {
        alert("Please enter a valid age.");
    }
}

// Call the function
greetUser();
