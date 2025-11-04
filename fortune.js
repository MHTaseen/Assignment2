// Theme presets - each button applies all 4 features at once
const themes = {
    theme1: {
        fontColor: '#856404',
        bgColor: '#fff3cd',
        borderColor: '#ffc107',
        fontFamily: 'Georgia, serif',
        fontSize: '20px'
    },
    theme2: {
        fontColor: '#c0392b',
        bgColor: '#ffe6e6',
        borderColor: '#e74c3c',
        fontFamily: 'Arial, sans-serif',
        fontSize: '22px'
    },
    theme3: {
        fontColor: '#27ae60',
        bgColor: '#e6ffe6',
        borderColor: '#2ecc71',
        fontFamily: 'Courier New, monospace',
        fontSize: '18px'
    },
    theme4: {
        fontColor: '#2980b9',
        bgColor: '#e6f7ff',
        borderColor: '#3498db',
        fontFamily: 'Times New Roman, serif',
        fontSize: '24px'
    }
};

// Function to apply a complete theme
function applyTheme(theme) {
    fortuneBox.style.color = theme.fontColor;
    fortuneBox.style.backgroundColor = theme.bgColor;
    fortuneBox.style.borderColor = theme.borderColor;
    fortuneBox.style.fontFamily = theme.fontFamily;
    fortuneBox.style.fontSize = theme.fontSize;
    console.log('Theme applied:', theme);
}

// Event listeners - each button applies its own complete theme
document.getElementById('font-color-btn').addEventListener('click', function() {
    applyTheme(themes.theme1);
});

document.getElementById('bg-color-btn').addEventListener('click', function() {
    applyTheme(themes.theme2);
});

document.getElementById('border-color-btn').addEventListener('click', function() {
    applyTheme(themes.theme3);
});

document.getElementById('font-style-btn').addEventListener('click', function() {
    applyTheme(themes.theme4);
});
