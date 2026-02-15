// --- TASK 1: Color Changing Button ---
const btn = document.getElementById('colorButton');

// We listen for a 'click' event
btn.addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change background color
    btn.style.backgroundColor = randomColor;
    
    // Optional: Log it to console to show you know how to debug
    console.log("Button color changed to: " + randomColor);
});


// --- TASK 2: Time-Based Greeting Alert ---
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    // Display the alert
    alert(greeting + " The time is " + now.toLocaleTimeString());
}


// --- TASK 3: Addition Calculator ---
function addNumbers() {
    // 1. Get values from inputs
    // We use parseFloat ensures we treat them as numbers, not strings
    let val1 = parseFloat(document.getElementById('num1').value);
    let val2 = parseFloat(document.getElementById('num2').value);

    // 2. Validate input (check if they are actually numbers)
    if (isNaN(val1) || isNaN(val2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    // 3. Calculate and Display
    let total = val1 + val2;
    document.getElementById('sumResult').innerText = total;
}