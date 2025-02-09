// Function to greet the user and calculate age in 5 years
function greetUser() {
    let name = prompt("What is your name?");
    let age = parseInt(prompt("How old are you?"));
    let favoriteColor = prompt("What is your favorite color?");
    let myName = "Your Name";
    let myEmail = "your.email@example.com";
    
    if (!isNaN(age)) {
        let futureAge = age + 5;
        let message = `Hello, ${name}! In 5 years, you will be ${futureAge} years old. My name is ${myName}, and you can contact me at ${myEmail}.`;
        
        let styledMessage = `%c${message}`;
        let style = `color: ${favoriteColor}; font-weight: bold;`;
        
        console.log(styledMessage, style);
        alert(message);
    } else {
        alert("Please enter a valid age.");
    }
}

// Call the function
greetUser();
