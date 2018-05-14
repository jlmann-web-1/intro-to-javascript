function greetUser() {
    // get user input
    var name = prompt("What is your name?");

    // write content on a specific element on the page (better than document.write)
    document.getElementById('greeting').innerHTML = "Welcome, " + name;
}

function changeBackground() {
    // javascript can change CSS
    document.body.style.backgroundColor = "#44aaff";
}

function highlight() {
    // javascript can change specific CSS elements
    document.getElementById('greeting').style.backgroundColor = "#ffff88";
}

function showSecretMessage() {
    // another example of writing data to a specific element on the page
    var secret = "Zaxby's Zax Sauce is actually just mayonaise, ketchup, garlic powder and pepper.";

    document.getElementById('secret_message').innerHTML = secret;
}
