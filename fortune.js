const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "Your future looks bright, embrace the opportunities ahead.",
    "A journey of a thousand miles begins with a single step.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Believe you can and you're halfway there.",
    "Your hard work will soon pay off in unexpected ways.",
    "The only way to do great work is to love what you do.",
    "Every moment is a fresh beginning.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "The secret of getting ahead is getting started."
];
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// Get fortune box element and display random fortune on page load
const fortuneBox = document.getElementById('fortune-box');
fortuneBox.textContent = getRandomFortune();

// Arrays
const fontColors = ['#856404', '#c0392b', '#27ae60', '#2980b9', '#8e44ad', '#d35400'];
let currentFontColorIndex = 0;

const bgColors = ['#fff3cd', '#ffe6e6', '#e6f7ff', '#f0e6ff', '#e6ffe6', '#fff0e6'];
let currentBgColorIndex = 0;

const borderColors = ['#ffc107', '#e74c3c', '#3498db', '#9b59b6', '#2ecc71', '#f39c12'];
let currentBorderColorIndex = 0;

const fontFamilies = [
    'Georgia, serif',
    'Arial, sans-serif',
    'Courier New, monospace',
    'Times New Roman, serif',
    'Verdana, sans-serif',
    'Comic Sans MS, cursive'
];
let currentFontFamilyIndex = 0;

const fontSizes = ['20px', '22px', '18px', '24px', '21px', '23px'];
let currentFontSizeIndex = 0;

// Event listener
document.getElementById('font-color-btn').addEventListener('click', function() {
    currentFontColorIndex = (currentFontColorIndex + 1) % fontColors.length;
    fortuneBox.style.color = fontColors[currentFontColorIndex];
    console.log('Font color changed to:', fontColors[currentFontColorIndex]);
});

document.getElementById('bg-color-btn').addEventListener('click', function() {
    currentBgColorIndex = (currentBgColorIndex + 1) % bgColors.length;
    fortuneBox.style.backgroundColor = bgColors[currentBgColorIndex];
    console.log('Background color changed to:', bgColors[currentBgColorIndex]);
});

document.getElementById('border-color-btn').addEventListener('click', function() {
    currentBorderColorIndex = (currentBorderColorIndex + 1) % borderColors.length;
    fortuneBox.style.borderColor = borderColors[currentBorderColorIndex];
    console.log('Border color changed to:', borderColors[currentBorderColorIndex]);
});

document.getElementById('font-style-btn').addEventListener('click', function() {
    currentFontFamilyIndex = (currentFontFamilyIndex + 1) % fontFamilies.length;
    currentFontSizeIndex = (currentFontSizeIndex + 1) % fontSizes.length;
    fortuneBox.style.fontFamily = fontFamilies[currentFontFamilyIndex];
    fortuneBox.style.fontSize = fontSizes[currentFontSizeIndex];
    console.log('Font style changed to:', fontFamilies[currentFontFamilyIndex], fontSizes[currentFontSizeIndex]);
});

console.log('Fortune Generator initialized ✓');
