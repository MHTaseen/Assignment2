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

// Define 4 complete theme presets
const themes = {
    classic: {
        fontColor: '#856404',
        bgColor: '#fff3cd',
        borderColor: '#ffc107',
        fontFamily: 'Georgia, serif',
        fontSize: '22px'
    },
    ocean: {
        fontColor: '#2980b9',
        bgColor: '#e6f7ff',
        borderColor: '#3498db',
        fontFamily: 'Verdana, sans-serif',
        fontSize: '20px'
    },
    sunset: {
        fontColor: '#c0392b',
        bgColor: '#ffe6e6',
        borderColor: '#e74c3c',
        fontFamily: 'Times New Roman, serif',
        fontSize: '24px'
    },
    mystic: {
        fontColor: '#8e44ad',
        bgColor: '#f0e6ff',
        borderColor: '#9b59b6',
        fontFamily: 'Arial, sans-serif',
        fontSize: '21px'
    }
};

// Function to apply a theme
function applyTheme(theme) {
    fortuneBox.style.color = theme.fontColor;
    fortuneBox.style.backgroundColor = theme.bgColor;
    fortuneBox.style.borderColor = theme.borderColor;
    fortuneBox.style.fontFamily = theme.fontFamily;
    fortuneBox.style.fontSize = theme.fontSize;
}

// Event listeners for each theme button
document.getElementById('font-color-btn').addEventListener('click', function() {
    applyTheme(themes.classic);
    console.log('Classic theme applied');
});

document.getElementById('bg-color-btn').addEventListener('click', function() {
    applyTheme(themes.ocean);
    console.log('Ocean theme applied');
});

document.getElementById('border-color-btn').addEventListener('click', function() {
    applyTheme(themes.sunset);
    console.log('Sunset theme applied');
});

document.getElementById('font-style-btn').addEventListener('click', function() {
    applyTheme(themes.mystic);
    console.log('Mystic theme applied');
});

console.log('Fortune Generator initialized ✓');
