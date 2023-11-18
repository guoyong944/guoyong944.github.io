// 全局变量
let currentQuestionIndex = 0;
let score = 0;
let part = 1; // 部分 1

// 第一部分的问题
const part1Questions = [
    { text: "问题 1: 地球是太阳系的中心？？", answer: false },
    { text: "问题 2: 水的化学式是 H2O？", answer: true },
    { text: "问题 3: 人类的正常体温是 37°C。", answer: true },
    { text: "问题 4: 光速是每秒钟 300,000 公里。", answer: true },
    { text: "问题 5: 音速比光速快。", answer: false },
    { text: "问题 6: 地球是太阳系中唯一有生命的行星。", answer: false },
    { text: "问题 7: 摩尔定律是关于电脑处理能力的。", answer: true },
    { text: "问题 8: 金星是太阳系中最热的行星。", answer: true },
    { text: "问题 9: 人体内最大的器官是肝脏。", answer: false },
    { text: "问题 10: 邓老三是HON头号恶霸。", answer: true },
];

// 第二部分的问题
const part2Questions = [
    { text: "问题 11: 下列哪种动物是哺乳动物？", options: ['A. 蛇', 'B. 鲨鱼', 'C. 鲸鱼', 'D. 鳄鱼'], answer: 'C', explanation: '鲸鱼是哺乳动物，因为它们哺乳并生活在水中。' },
    { text: "问题 12: 哪个国家被称为“太阳升起的国家”？", options: ['A. 中国', 'B. 日本', 'C. 泰国', 'D. 龙宫'], answer: 'B', explanation: '日本被称为“太阳升起的国家”，因为它的名字意味着“日本”的来源。' },
    { text: "问题 13: 世界上最长的河流是？", options: ['A. 尼罗河', 'B. 亚马逊河', 'C. 黄河', 'D. 密西西比河'], answer: 'A', explanation: '尼罗河是世界上最长的河流，流经东非多个国家。' },
    { text: "问题 14: 哪种金属的化学符号是 Fe？", options: ['A. 金', 'B. 银', 'C. 铜', 'D. 铁'], answer: 'D', explanation: '铁的化学符号是 Fe，来自其拉丁名“Ferrum”。' },
    { text: "问题 15: 邓老三常常被人所知的称号是？", options: ['A. 语言学家', 'B. 积分大王', 'C. HON头号恶霸', 'D. 不敢说'], answer: 'D', explanation: '说了的话命就没了' }
];

// 显示问题的函数
function displayQuestion() {
    let question;
    let questionHtml = "";

    if (part === 1) {
        question = part1Questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.text;
        document.getElementById('part1-answers').style.display = 'block';
        document.getElementById('part2-answers').style.display = 'none';
    } else {
        question = part2Questions[currentQuestionIndex - part1Questions.length];
        //显示问题和选项

         questionHtml = question.text + "<br>";

        // 循环遍历每个选项并创建一个单选按钮
        for (let i = 0; i < question.options.length; i++) {
            questionHtml += "<div>" + question.options[i] + "</div>";
        }
        
        document.getElementById('question').innerHTML  = questionHtml;
        document.getElementById('part1-answers').style.display = 'none';
        document.getElementById('part2-answers').style.display = 'block';
    }


    // 隐藏反馈和下一题按钮，直到答案被提交
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';
}

// 提交答案的函数
function submitAnswer(answer) {
    let question;
    if (part === 1) {
        question = part1Questions[currentQuestionIndex];
        if (answer === question.answer) {
            document.getElementById('feedback').textContent = '正确！+10';
            score += 10; // 正确答案加 10 分
        } else {
            document.getElementById('feedback').textContent = '错误！+0';
        }
        document.getElementById('next-button').style.display = 'block';} 
    else {
        question = part2Questions[currentQuestionIndex - part1Questions.length];
        if (answer === question.answer) {
            document.getElementById('feedback').textContent = '正确！+10';
            score += 10; // 正确答案加 10 分
        } else {
            document.getElementById('feedback').textContent = '错误！-10       '+question.explanation;
            score -= 10; // 错误答案减 10 分
        }
        document.getElementById('next-button').style.display = 'block';} 
    // 其他设置保持不变
}

// 进入下一题的函数
function nextQuestion() {
    currentQuestionIndex++;
    if ((part === 1 && currentQuestionIndex < part1Questions.length) || (part === 2 && currentQuestionIndex < part1Questions.length + part2Questions.length)) {
        displayQuestion();
    } else if (part === 1) {
        // 第一部分结束
        part = 2;
        currentQuestionIndex = part1Questions.length;
        displayQuestion();
    } else {
        // 第二部分结束
        showResults();
    }
}

// 显示结果的函数
function showResults() {
    let evaluation = "";
    let evaluationColor = "black";

    // 根据分数给出评价
    if (score >= 80) {
        evaluation = "优秀！你对这些知识掌握得非常好。";
        evaluationColor = "green";
    } else if (score >= 50) {
        evaluation = "良好，但还有提升的空间。";
        evaluationColor = "orange";
    } else {
        evaluation = "需要努力。继续加油！";
        evaluationColor = "red";
    }

    // 构建显示结果的 HTML
    let resultsHtml = "<div style='color: " + evaluationColor + ";'>" +
                      "<h2>问卷结果</h2>" +
                      "<p>你的总分是: <strong>" + score + "</strong></p>" +
                      "<p>" + evaluation + "</p>" +
                      "<p>珍爱生命，反对霸凌，构建和谐HON</p>" +
                      "</div>";

    // 显示结果
    document.getElementById('quiz-container').innerHTML = resultsHtml;
}

// 更新 endQuiz 函数
function endQuiz() {
    document.getElementById('quiz-container').innerHTML = '<div>第一部分结束，你的总分是: ' + score + '</div><button id="next-part-button">下一部分</button>';
    document.getElementById('next-part-button').addEventListener('click', function() {
        part = 2; // 更新部分
        currentQuestionIndex = part1Questions.length; // 从第二部分的第一题开始
        displayQuestion();
    });
}

// 其他代码保持不变

