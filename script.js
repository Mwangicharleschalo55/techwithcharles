// Click Event - Change Text
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('textElement');
    textElement.textContent = "The text has changed! You've clicked the button.";
});

// Dynamic Content Update
document.getElementById('updateNameBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('userInput').value;
    const nameDisplay = document.getElementById('nameDisplay');
    if (nameInput) {
        nameDisplay.textContent = `Hello, ${nameInput}! Welcome to the page.`;
    } else {
        nameDisplay.textContent = "Please enter a name.";
    }
});

// Animation - Change Background Color
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.transition = 'background-color 2s ease';
    document.body.style.backgroundColor = '#ff6347';  // Tomato color
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    const email = document.getElementById('email').value;
    const formStatus = document.getElementById('formStatus');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        formStatus.textContent = "Form submitted successfully!";
        formStatus.style.color = 'green';
    } else {
        formStatus.textContent = "Please enter a valid email.";
        formStatus.style.color = 'red';
    }
});

// Random Quote Generator
const quotes = [
    "The best way to predict the future is to create it.",
    "Your time is limited, so don't waste it living someone else's life.",
    "In the middle of every difficulty lies opportunity.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do."
];

document.getElementById('quoteBtn').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteDisplay').textContent = randomQuote;
});
