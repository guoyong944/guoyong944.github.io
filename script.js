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
    { test:"Papa, Mama...\nIch habe euch etwas \nWichtiges zu sagen...",
    text: "Papa, Mama...\nIch habe euch etwas \nWichtiges zu sagen...\nEs ist ein Geheimnis, \ndas seit vielen Jahren \nin meinem Herzen \nverborgen ist...\n\n&Was ist denn los, \n&mein Sohn?\n\nIch habe mich immer \nan eure Liebe und \nUnterstützung erinnert\n, seit ich ein Kind war...\n\nIch bin sehr glücklich, \nin dieser Familie zu \nleben. Ich werde euch \nund unsere Familie \nimmer lieben, und Ich \nweiß auch, dass ihr \nwollt, dass ich \nglücklich bin. Also...\n\n&Na und? \n&Mach dir keine Sorgen, \n&mein Sohn, sprich mit \n&Mama und Papa.\n\nAlso...Ich will euch mal was \nklar machen... \nIhr habt euch immer \nSorgen gemacht, \nwann ich eine Freundin\n habe. Wann ich heirate...\n\nIch habe sie mit \nverschiedenen Ausreden \ngemieden. \nAber ich möchte \neuren Fragen nicht \nmehr ausweichen.\n\nEs ist wahr, dass ich \nkeine Freundin haben \nwerde und ich will nicht \nheiraten, weil ich schwul \nbin und Männer mag."},
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



function show_questions(text) {
    var num = text.length;
    var i =0;
    function show() {
        var shower = text.substr (0,i);
        document.getElementById ("question").innerHTML = shower;
        i++;
        if(i > num) {
            clearInterval (done);
            enableAnswerButtons();
        }
    }
    var done=setInterval (show,50);
}
function show_part2_text(text) {
    var container = document.getElementById('part2_text');
    var i = 0;
    var currentText = '';
    document.getElementById('part2_text').style.display = 'block';
    document.getElementById('question').style.display = 'none';

    function showNextChar() {
        if (i < text.length) {
            if(text.charAt(i)==="&"){currentText +="&nbsp&nbsp&nbsp&nbsp";i++;}
            currentText += text.charAt(i);
            currentText=currentText.split("\n").slice(-18).join("\n");
            var currentText_list=currentText.split("\n\n");
            var para_num=currentText_list.length;
            if (para_num>1){
            var currentText1=currentText_list.slice(0,para_num-1).join("\n\n");
            var currentText2=currentText_list.slice(-1).join("\n\n");
            container.innerHTML="<span style='color:#D5D5D5'>"+currentText1+"</span>"+"\n\n"+currentText2;
            }
            else{container.innerHTML=currentText;}

            i++;
            setTimeout(showNextChar, 50); // 调整速度
        }
        else { // 如果已经显示了所有文本
            setTimeout(nextQuestion, 3000);   

        }
    }

    showNextChar();
}
function show_text(question, kid, papa) {
    var fullText = question + kid + papa; // 组合整个文本
    var num_q = question.length; // question文本的长度
    var num_k = num_q + kid.length; // kid文本结束的位置
    var i = num_q; // 从文本的第一个字符开始
    var currentText = ''; // 当前逐字显示的文本

    function show() {
        if (i < num_k) {
            // 如果当前索引在 question 与 kid 之间
            currentText = "<span style='color:#D5D5D5'>"+question +"</span>"+ "<br><br>" + fullText.substring(num_q, i);
        } else {  
            // 如果当前索引在 kid 与 papa 之间或之后
            currentText = "<span style='color:#D5D5D5'>"+question + "<br><br>" + kid + "<br><br>" +"</span>"+ fullText.substring(num_k, i);
        }
        document.getElementById("question").innerHTML = currentText;
        i++; // 移动到下一个字符
        if (i > fullText.length) { // 如果已经显示了所有文本
            clearInterval(done);
            show_score();
            setTimeout(nextQuestion, 3000);   
        }
    }
    
    var done = setInterval(show, 50); // 每100毫秒显示下一个字符
}

// 显示问题的函数
function displayQuestion() {
    let question;
    let questionHtml = "";

    if (part === 1) {
        question = part1Questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.text;
        document.getElementById('part1-answers').style.display = 'block';
        document.getElementById('part2-answers').style.display = 'none';
    } 
    else if(currentQuestionIndex===part1Questions.length) {
        show_part2_text(part2Questions[0].text); 
        document.getElementById('question').style.display = 'none';       
        document.getElementById('part1-answers').style.display = 'none';
    }
    else {
        document.getElementById('part2_text').style.display = 'none';
        document.getElementById('question').style.display = 'block';
        question = part2Questions[currentQuestionIndex - part1Questions.length];
        document.getElementById('question').style.fontSize = "30px";

        //显示问题和选
        disableAnswerButtons();
        show_questions(question.text);
        //document.getElementById('question').innerHTML  = questionHtml;

        document.getElementById('part2-answers').style.display = 'block';
        set_button_color();
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
        if (answer === true) {
            score += 1; // 正确答案加 10 分
            document.getElementById('feedback').textContent = score;

        } else {
            document.getElementById('feedback').textContent = score;
        }
    show_score();
    nextQuestion();    
    } 
        
    else {
        button = document.getElementById('button'+answer);
        button.style.backgroundColor = '#33A9FF';
        button.style.color = '#FFFFFF';
        disableAnswerButtons();
        question = part2Questions[currentQuestionIndex - part1Questions.length];
        kid=question.answer_kid[answer];
        papa=question.answer_papa[answer];
        if (papa === "...") {
            score += 1; // 正确答案加 10 分
        }
        show_text(question.text,kid,papa);

        
    }
   
}

function show_score() {    
    if (score === 0) {
    document.body.style.backgroundImage = "url('pic0.jpg')";
} else if (score === 1) {
    document.body.style.backgroundImage = "url('pic1.jpg')";
} else if (score === 2) {
    document.body.style.backgroundImage = "url('pic2.jpg')";
} else {
    document.body.style.backgroundImage = "url('pic3.jpg')";
} }

function set_button_color() {
    var part2ButtonsContainer = document.getElementById("part2_button");
    // 获取这个容器下的所有按钮
    var buttons = part2ButtonsContainer.getElementsByTagName("button");
    // 遍历这些按钮并设置它们的颜色
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "white"; // 设置背景颜色
        buttons[i].style.color = "black"; // 设置文本颜色
    }}

function disableAnswerButtons() {
    var part2ButtonsContainer = document.getElementById("part2_button");
    // 获取这个容器下的所有按钮
    var buttons = part2ButtonsContainer.getElementsByTagName("button");
    // 遍历这些按钮并设置它们的颜色
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
    }}

function enableAnswerButtons() {
    var part2ButtonsContainer = document.getElementById("part2_button");
    // 获取这个容器下的所有按钮
    var buttons = part2ButtonsContainer.getElementsByTagName("button");
    // 遍历这些按钮并设置它们的颜色
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false
    }}


// 进入下一题的函数
function nextQuestion() {
    currentQuestionIndex++;
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

