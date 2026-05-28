async function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    document.getElementById('auth-message').innerText = data.message;
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    if (data.success) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('app-section').style.display = 'block';
        document.getElementById('display-name').innerText = username;
    } else {
        document.getElementById('auth-message').innerText = data.message;
    }
}

function logout() {
    location.reload(); 
}

function calculateRecommendation() {
    const heightCm = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('result');

    if (!heightCm || !weight) {
        resultDiv.style.display = 'block';
        resultDiv.innerText = "Please enter valid numbers.";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let message = "";
    let colorClass = "";

    if (bmi < 18.5) {
        message = `Your BMI is ${bmi} (Underweight). \nRecommendation: You should increase your calorie intake with nutrient-rich foods.`;
        colorClass = "result-bad";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        message = `Your BMI is ${bmi} (Normal). \nRecommendation: Great job! Maintain a balanced diet and regular exercise.`;
        colorClass = "result-good";
    } else if (bmi >= 25 && bmi < 29.9) {
        message = `Your BMI is ${bmi} (Overweight). \nRecommendation: Try to incorporate cardio exercises and monitor portion sizes.`;
        colorClass = "result-bad";
    } else {
        message = `Your BMI is ${bmi} (Obese). \nRecommendation: Consult a healthcare provider for a personalized weight loss plan.`;
        colorClass = "result-bad";
    }

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<span class="${colorClass}">${message.replace(/\n/g, '<br>')}</span>`;
}