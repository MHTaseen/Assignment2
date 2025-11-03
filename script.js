// Log initialization
console.log('Home Page Loaded ✓');

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Add animation on card hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Display welcome message in console
console.log('%c Welcome to CSE 391 Assignment 2! ', 
    'background: #667eea; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('This assignment demonstrates:');
console.log('1. Fortune Generator - DOM manipulation and event handling');
console.log('2. Stopwatch - Timing functions and state management');
console.log('3. To-Do List - Local storage and CRUD operations');

// Add a simple visitor counter (stored in localStorage)
function updateVisitorCount() {
    let visits = localStorage.getItem('pageVisits');
    if (visits === null) {
        visits = 0;
    }
    visits = parseInt(visits) + 1;
    localStorage.setItem('pageVisits', visits);
    console.log('Page visits:', visits);
}

// Call visitor counter
updateVisitorCount();

function checkFiles() {
    const requiredFiles = [
        'fortune.html',
        'fortune.js',
        'stopwatch.html',
        'stopwatch.js',
        'todo.html',
        'todo.js',
        'styles.css',
        'index.html',
        'script.js'
    ];
    console.log('Required files for assignment:', requiredFiles);
}

checkFiles();