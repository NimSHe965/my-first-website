// Get elements from HTML
const colorBtn = document.getElementById('colorBtn');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const countDisplay = document.getElementById('count');

// Counter variable
let count = 0;

// Array of colors to cycle through
const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
];

let currentColorIndex = 0;

// Change background color
colorBtn.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.background = colors[currentColorIndex];
    console.log('Background changed!'); // This appears in browser console
});

// Increment counter
incrementBtn.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
    console.log('Count is now:', count);
});

// Reset counter
resetBtn.addEventListener('click', function() {
    count = 0;
    countDisplay.textContent = count;
    console.log('Counter reset!');
});

// Log a message when page loads
console.log('Website loaded successfully! 🚀');
console.log('This helps me see what is happening');
console.log('Count value:', count); // See variable values