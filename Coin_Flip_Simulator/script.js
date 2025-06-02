const coin = document.getElementById('coin');
const resultText = document.getElementById('result-text');
const flipBtn = document.getElementById('flip');
const headsBtn = document.getElementById('heads');
const tailsBtn = document.getElementById('tails');

let userChoice = null;

headsBtn.addEventListener('click', () => {
    userChoice = 'heads';
    highlightChoice('heads');
    resultText.textContent = 'You choose Heads';
});

tailsBtn.addEventListener('click', () => {
    userChoice = 'tails';
    highlightChoice('tails');
    resultText.textContent = 'You choose Tails';
});

flipBtn.addEventListener('click', () => {
    if (!userChoice) {
        resultText.textContent = '❌ Please select Heads or Tails first.';
        return;
    }

    if (coin.classList.contains('spinning')) return;

    coin.classList.remove('flipped');
    coin.classList.add('spinning');

    setTimeout(() => {
        coin.classList.remove('spinning');
        const isHeads = Math.random() < 0.5;

        if (!isHeads) coin.classList.add('flipped');

        const flipResult = isHeads ? 'heads' : 'tails';
        const win = userChoice === flipResult;

        resultText.textContent = `It's ${flipResult.toUpperCase()}! You ${win ? 'won 🎉' : 'lost 😢'}`;
    }, 2000);
});

function highlightChoice(choice) {
    headsBtn.classList.remove('active');
    tailsBtn.classList.remove('active');

    if (choice === 'heads') headsBtn.classList.add('active');
    else tailsBtn.classList.add('active');
}
