const greetingText = [
    "Thanks for visiting!",
    "Hope you enjoy exploring this simple page.",
    "Have a wonderful day!"
];

const button = document.getElementById('greet-button');
const greeting = document.getElementById('greeting');

if (button && greeting) {
    button.addEventListener('click', () => {
        const message = greetingText[Math.floor(Math.random() * greetingText.length)];
        greeting.textContent = message;
        greeting.classList.remove('hidden');
    });
}
