let originalValentineContent;

window.onload = () => {
    const valentinePage = document.getElementById('valentine-page');
    originalValentineContent = valentinePage.innerHTML; // Save the original content when the page loads
};


function goToQuiz() {
    document.getElementById('cover-page').style.display = 'none';
    document.getElementById('quiz-calculator-page').classList.remove('hidden');
    document.getElementById('quiz-calculator-page').style.display = "block";
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = '06/09/2024';
    const errorMessage = document.getElementById('error-message');

    if (answer === correctAnswer) {
        document.getElementById('quiz-card').style.display = 'none';
        document.getElementById('love-calculator').style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        document.getElementById('result').textContent = 'Please enter both names.';
        return;
    }

    // Love calculation logic: generate a random score between 90 and 100
    const loveScore = Math.floor(Math.random() * 11) + 90;
    document.getElementById('result').textContent = `The love score between ${name1} and ${name2} is ${loveScore}%! ❤️ A match made in heaven!!`;
    document.getElementById('next-valentine').classList.remove('hidden');
}



function goToValentinePage() {
    document.getElementById('quiz-calculator-page').style.display = 'none';
    document.getElementById('valentine-page').classList.remove('hidden');
    document.getElementById('valentine-page').style.display = "block"
}

function acceptValentine() {
    document.getElementById('valentine-page').style.display = 'none';
    document.getElementById('valentine-letter-page').classList.remove('hidden');
}

function declineValentine() {
    const valentinePage = document.getElementById('valentine-page');
    valentinePage.innerHTML = '<h1>dowan done.</h1><img src="images/angry kuromi.jpg" alt="Sad Image" style="width: 200px; display: block; margin-left: auto;margin-right: auto;width: 50%; margin-bottom: 20px;"><button onclick="goToCoverPage()">Return to Start</button>';

    
}

function goToCoverPage() {

    const valentinePage = document.getElementById('valentine-page');
    valentinePage.innerHTML = originalValentineContent; // Reset to the original content


    document.getElementById('valentine-page').style.display = 'none';
    document.getElementById('quiz-calculator-page').style.display = 'none';
    document.getElementById('love-calculator').style.display = 'none';
    document.getElementById('quiz-card').style.display = 'block';
    document.getElementById('next-valentine').classList.add('hidden');
    document.getElementById('error-message').style.display = 'none';

    // Reset input fields
    document.getElementById('answer').value = '';
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
    document.getElementById('result').textContent = '';

    // Show the cover page
    document.getElementById('cover-page').style.display = 'flex';

    document.getElementById('quiz-calculator-page').classList.add('hidden'); // Re-hide this for restart
    
}
