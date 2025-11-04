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

// Define 4 fixed style presets (each with all 5 features)
const stylePresets = {
    preset1: {
        fontColor: '#c0392b',
        bgColor: '#ffe6e6',
        borderColor: '#e74c3c',
        fontFamily: 'Georgia, serif',
        fontSize: '22px',
        name: 'Classic Red'
    },
    preset2: {
        fontColor: '#2980b9',
        bgColor: '#e6f7ff',
        borderColor: '#3498db',
        fontFamily: 'Arial, sans-serif',
        fontSize: '20px',
        name: 'Ocean Blue'
    },
    preset3: {
        fontColor: '#27ae60',
        bgColor: '#e6ffe6',
        borderColor: '#2ecc71',
        fontFamily: 'Verdana, sans-serif',
        fontSize: '21px',
        name: 'Nature Green'
    },
    preset4: {
        fontColor: '#8e44ad',
        bgColor: '#f0e6ff',
        borderColor: '#9b59b6',
        fontFamily: 'Times New Roman, serif',
        fontSize: '23px',
        name: 'Royal Purple'
    }
};

// Function to apply a complete style preset
function applyStylePreset(preset) {
    fortuneBox.style.color = preset.fontColor;
    fortuneBox.style.backgroundColor = preset.bgColor;
    fortuneBox.style.borderColor = preset.borderColor;
    fortuneBox.style.fontFamily = preset.fontFamily;
    fortuneBox.style.fontSize = preset.fontSize;
    console.log(`Applied ${preset.name} theme:`, preset);
}

// Event listeners for each button
document.getElementById('font-color-btn').addEventListener('click', function() {
    applyStylePreset(stylePresets.preset1);
});

document.getElementById('bg-color-btn').addEventListener('click', function() {
    applyStylePreset(stylePresets.preset2);
});

document.getElementById('border-color-btn').addEventListener('click', function() {
    applyStylePreset(stylePresets.preset3);
});

document.getElementById('font-style-btn').addEventListener('click', function() {
    applyStylePreset(stylePresets.preset4);
});

console.log('Fortune Generator initialized ✓');
console.log('4 style presets loaded:', Object.keys(stylePresets).map(key => stylePresets[key].name));
