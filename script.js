let currentQuestionIndex = 0;
let score = 0;
const questions = [
    { text: "问题 1: 地球是太阳系的中心。", answer: false },
    { text: "问题 2: 水的化学式是 H2O。", answer: true },
    { text: "问题 3: 人类的正常体温是 37°C。", answer: true },
    { text: "问题 4: 光速是每秒钟 300,000 公里。", answer: true },
    { text: "问题 5: 音速比光速快。", answer: false },
    { text: "问题 6: 地球是太阳系中唯一有生命的行星。", answer: false },
    { text: "问题 7: 摩尔定律是关于电脑处理能力的。", answer: true },
    { text: "问题 8: 金星是太阳系中最热的行星。", answer: true },
    { text: "问题 9: 人体内最大的器官是肝脏。", answer: false },
    { text: "问题 10: 邓老三是HON头号恶霸。", answer: true },
];

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.text;
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';
}

function submitAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.answer) {
        document.getElementById('feedback').textContent = '正确！+10';
        score += 10; // 正确答案加 10 分
    } else {
        document.getElementById('feedback').textContent = '错误！+0';
    }
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-container').innerHTML = '<div>问卷结束！你的总分是: ' + score + '</div><button id="restart-button">重新开始</button>';
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').innerHTML = '<div id="question"></div><button onclick="submitAnswer(true)">正确</button><button onclick="submitAnswer(false)">错误</button><div id="feedback"></div><button id="next-button" onclick="nextQuestion()" style="display:none;">下一题</button>';
    displayQuestion();
}

displayQuestion();
