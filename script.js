// 全局变量
let currentQuestionIndex = 0;
let score = 0;
let part = 1; // 部分 1

// 第一部分的问题
const part1Questions = [
    { text: "Glauben Sie an Ihr Recht, ein glückliches und erfülltes Leben zu führen, unabhängig von Ihrer sexuellen Orientierung?", answer: true },
    { text: "Glauben Sie, dass es für die persönliche Entwicklung wichtig ist, seine sexuelle Orientierung zu kennen und zu akzeptieren?", answer: true },
    { text: "Glauben Sie, dass jeder Mensch es verdient, geliebt zu werden, unabhängig von seiner sexuellen Orientierung?", answer: true },
    { text: "Glauben Sie, dass ein Coming-out eine Erfahrung sein kann, die das Selbstvertrauen und den persönlichen Wert stärkt?", answer: true },
    { text: "Glauben Sie, dass Sie sich durch Ihr Coming-out freier und echter in Ihrem Leben fühlen?", answer: true },
    { text: "Glauben Sie, dass Sie durch Ihr Coming-out andere inspirieren und unterstützen können?", answer: true },
    { text: "Sind Sie bereit, sich der Herausforderung zu stellen, die verschiedenen möglichen Reaktionen und Ergebnisse Ihres Coming-outs zu erkunden?", answer: true },

];

// 第二部分的问题
const part2Questions = [
    { text: "Ich glaube nicht, wie ist das möglich, wie kannst du ein Schwuler sein?", 
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'], 
    answer_kid: { "A": "Ich bin immer schwul, ich habe es euch nur vorher nicht gesagt.","B": "Warum kann ich nicht schwul sein? Ist es falsch, schwul zu sein?", "C": "Mama und Papa, ich meine es ernst. Ich bin schwul. Ich lüge nicht.", "D": "Ich weiß selber nicht, warum ich Männer mag."},
    answer_papa: { "A": "...","B": "Wie sprichst du mit Mama und Papa! Ich glaube, du bist echt krank!", "C": "...", "D": "Was denkst du dir eigentlich? Willst du uns verarschen?"  }},
    { text: "Wie kann es Liebe zwischen Männern geben? Hast du dich geirrt??", 
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe und Freundschaft.'], 
    answer_kid: { "A": "Ich weiß nicht, ob das Liebe oder Freundschaft ist, und ich bin verwirrt...","B": "Ich bin mir sicher, dass es Liebe ist. Es ist das Gefühl, mein Herzschlag setzte für einen Moment aus. ", "C": "Vielleicht. Vielleicht geht es nur um eine Freundschaft. ", "D": "Mama und Papa, ich bin ein Erwachsener, ich kann zwischen Liebe und Freundschaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du musst dich irren!","B": "...", "C": "Glaub Papa, du musst dich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass du keine Frauen magst, wenn du noch nie mit einer zusammen warst?", 
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Ich fühle mich nur von Jungs angezogen.?', ' Vielleicht könnte ich auch Frauen mögen?', ' Warum sollte ich Frauen mögen?'], 
    answer_kid: { "A": "Als ich in der Mittelschule war, wurde mir klar, dass ich Jungs mag. Ich habe keine Gefühle für Mädchen, egal wie hübsch, wie süß sie waren. ","B": "Seit meiner Kindheit fühle ich mich nur zu Jungs hingezogen. Ich interessiere mich nur für gutaussehende Männer, nicht für Mädchen.", "C": "Vielleicht, vielleicht möge ich auch Mädchen?", "D": "Ich bin schwul, warum sollte ich mit einer Frau zusammen sein?"},
    answer_papa: { "A": "...","B": "...", "C": "Ja, das ist die richtige Denkweise! Männer sollen Frauen mögen.", "D": "Du sagst, du bist schwul, aber du hast es noch nie versucht, woher weißt du, dass du keine Frauen magst?"  }},  
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
        //显示问题和选
         questionHtml = question.text + "<br>";
        // 循环遍历每个选项并创建一个单选按钮

        document.getElementById('question').innerHTML  = questionHtml;
        document.getElementById('part1-answers').style.display = 'none';
        document.getElementById('part2-answers').style.display = 'block';
        document.getElementById('buttonA').textContent = question.options[0];
        document.getElementById('buttonB').textContent = question.options[1];
        document.getElementById('buttonC').textContent = question.options[2];
        document.getElementById('buttonD').textContent = question.options[3];
        document.getElementById('answer_kid').textContent = "";
        document.getElementById('answer_papa').textContent = "";

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
            score += 1; // 正确答案加 10 分
        } else {
            document.getElementById('feedback').textContent = '错误！+0';
        }
        
    nextQuestion();    
    } 
        
    else {
        question = part2Questions[currentQuestionIndex - part1Questions.length];
        document.getElementById('answer_kid').textContent = question.answer_kid[answer];
        document.getElementById('answer_papa').textContent = question.answer_papa[answer];
        if (question.answer_papa[answer] === "...") {
            score += 1; // 正确答案加 10 分
        } 
        document.getElementById('next-button').style.display = 'block';}
        // 其他设置保持不变
    
    if (score === 0) {
        document.body.style.backgroundImage = "url('pic0.jpg')";
    } else if (score === 1) {
        document.body.style.backgroundImage = "url('pic1.jpg')";
    } else if (score === 2) {
        document.body.style.backgroundImage = "url('pic2.jpg')";
    } else {
        document.body.style.backgroundImage = "url('pic3.jpg')";
    }    
    

}
function disableAnswerButtons() {
    let buttons = document.querySelectorAll('#part1-answers button, #part2-answers button');
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}
// 进入下一题的函数
function nextQuestion() {
    currentQuestionIndex++;
    enableAnswerButtons();
    if ((part === 1 && currentQuestionIndex < part1Questions.length) || (part === 2 && currentQuestionIndex < part1Questions.length + part2Questions.length)) {
        displayQuestion();
    } else if (part === 1) {
        // 第一部分结束
        part = 2;
        score=0;
        document.body.style.backgroundImage = "url('pic0.jpg')";
        currentQuestionIndex = part1Questions.length;
        displayQuestion();
    } else {
        // 第二部分结束
        showResults();
    }
}
function enableAnswerButtons() {
    let buttons = document.querySelectorAll('#part1-answers button, #part2-answers button');
    buttons.forEach(function(button) {
        button.disabled = false;
    });
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

