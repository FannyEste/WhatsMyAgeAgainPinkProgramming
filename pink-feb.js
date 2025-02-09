// Function to greet the user and calculate age in 5 years
function greetUser() {
    let name = prompt("What is your name?");
    let age = parseInt(prompt("How old are you?"));
    let myName = "Your Name";
    let myEmail = "your.email@example.com";
    
    if (!isNaN(age)) {
        let futureAge = age + 5;
        alert(`Hello, ${name}! In 5 years, you will be ${futureAge} years old. My name is ${myName}, and you can contact me at ${myEmail}.`);
    } else {
        alert("Please enter a valid age.");
    }
}

// Call the function
greetUser();
