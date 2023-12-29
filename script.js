// 全局变量
let currentQuestionIndex = 0;
let currentPartQuestionIndex = 0;
let score = 0;
let part = 1; // 部分 1

// 第一部分的问题
const part1Questions = [
    { text: "Glauben Sie an Ihr Recht, ein glückliches und erfülltes Leben zu führen, unabhängig von Ihrer sexuellen Orientierung?", answer: true },
    { text: "Glauben Sie, dass es \nfür die persönliche \nEntwicklung wichtig ist, \nseine sexuelle Orien-\ntierung zu kennen und \nzu akzeptieren?", answer: true },
    { text: "Glauben Sie, dass jeder Mensch es verdient, geliebt zu werden, unabhängig von seiner sexuellen Orientierung?", answer: true },
    { text: "Glauben Sie, dass ein Coming-out eine Erfahrung sein kann, die das Selbstvertrauen und den persönlichen Wert stärkt?", answer: true },
    { text: "Glauben Sie, dass Sie \nsich durch Ihr Coming-\nout freier und echter in \nIhrem Leben fühlen?", answer: true },
    { text: "Glauben Sie, dass Sie durch Ihr Coming-out andere inspirieren und unterstützen können?", answer: true },
    { text: "Sind Sie bereit, sich der Herausforderung zu stellen, die verschiedenen möglichen Reaktionen und Ergebnisse Ihres Coming-outs zu erkunden?", answer: true },

];

// 第二部分的问题
const part2Questions = [
    { test:"Papa, Mama...\nIch habe euch etwas \nWichtiges zu sagen...",
    text: "Papa, Mama...\nIch habe euch etwas \nWichtiges zu sagen...\nEs ist ein Geheimnis, \ndas seit vielen Jahren \nin meinem Herzen \nverborgen ist...\n\n&Was ist denn los, \n&mein Sohn?\n\nIch habe mich immer \nan eure Liebe und \nUnterstützung erinnert\n, seit ich ein Kind war...\n\nIch bin sehr glücklich, \nin dieser Familie zu \nleben. Ich werde euch \nund unsere Familie \nimmer lieben, und Ich \nweiß auch, dass ihr \nwollt, dass ich \nglücklich bin. Also...\n\n&Na und? \n&Mach dir keine Sorgen, \n&mein Sohn, sprich mit \n&Mama und Papa.\n\nAlso...Ich will euch mal was \nklar machen... \nIhr habt euch immer \nSorgen gemacht, \nwann ich eine Freundin\n habe. Wann ich heirate...\n\nIch habe sie mit \nverschiedenen Ausreden \ngemieden. \nAber ich möchte \neuren Fragen nicht \nmehr ausweichen.\n\nEs ist wahr, dass ich \nkeine Freundin haben \nwerde und ich will nicht \nheiraten, weil ich schwul \nbin und Männer mag."},
    {text: "Ich glaube nicht, wie ist das  \nmöglich, wie kannst du ein \nSchwuler sein?",
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'],
  answer_kid: { "A": "&Ich bin immer schwul, ich \n&habe es euch nur vorher \n&nicht gesagt.","B": "&Warum kann ich nicht \n&schwul sein? Ist es falsch, \n&schwul zu sein?", "C": "&Mama und Papa, ich meine \n&es ernst. Ich bin schwul. Ich \n&lüge nicht.", "D": "&Ich weiß selber nicht, \n&warum ich Männer \n&mag."},
  answer_papa: { "A": "...","B": "Wie sprichst du mit Mama \nund Papa! Ich glaube, du \nbist echt krank!", "C": "...", "D": "Was denkst du dir \neigentlich? Willst du uns  \nverarschen?"  }},
   { text: "Wie kann es Liebe zwischen \nMännern geben? Hast du \ndich geirrt??",
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe und Freundschaft.'],
    answer_kid: { "A": "&Ich weiß nicht, ob das \n&Liebe oder Freundschaft  \n&ist, und ich bin verwirrt...","B": "&Ich bin mir sicher, dass es \n&Liebe ist. Es ist das Gefühl, \n&mein Herzschlag setzte für \n&einen Moment aus. ", "C": "&Vielleicht. Vielleicht geht es \n&nur um eine \n&Freundschaft. ", "D": "&Mama und Papa, ich bin ein \n&Erwachsener, ich kann zwi- \n&schen Liebe und Freund- \n&schaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du musst \ndich irren!","B": "...", "C": "Glaub Papa, du musst \ndich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass du \nkeine Frauen magst, wenn \ndu noch nie mit einer \nzusammen warst?",
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Vielleicht könnte ich auch Frauen mögen?', ' Ich fühle mich nur von Jungs angezogen.?', ' Warum sollte ich Frauen mögen?'],
    answer_kid: { "A": "&Als ich in der Mittelschule \n&war, wurdemir klar, dass  \n&ich Jungs mag. Ich habe \n&keine Gefühle für Mädchen, \n&egal wie hübsch, wie süß \n&sie waren. ","B": "&Vielleicht, vielleicht möge \n&ich auch Mädchen?", "C": "&Seit meiner Kindheit fühle \n&ich mich nur zu Jungs hin- \n&gezogen. Ich interessiere \n&mich nur für gutaussehende Män- \n&ner, nicht für Mädchen.", "D": "&Ich bin schwul, warum \n&sollte ich mit einer Frau \n&zusammen sein?"},
    answer_papa: { "A": "...","B": "Ja, das ist die richtige \nDenkweise! Männer sollen \nFrauen mögen.", "C": "…", "D": "Du sagst, du bist schwul, \naber du hast es noch nie \nversucht, woher weißt du, \ndass du keine \nFrauen magst?"  }}
];

const part3Questions = [
    { text: "Ich glaube nicht, \nwie ist das möglich, \nwie kannst du ein \nSchwuler sein?", 
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'], 
    answer_kid: { "A": "&Ich bin immer schwul, \n&ich habe es euch nur \n&vorher nicht gesagt.","B": "&Warum kann ich nicht \n&schwul sein? Ist es \n&falsch, schwul zu sein?", "C": "&Mama und Papa, \n&ich meine es ernst. \n&Ich bin schwul. \n&Ich lüge nicht.", "D": "&Ich weiß selber nicht, \n&warum ich Männer mag."},
    answer_papa: { "A": "...","B": "Wie sprichst du \nmit Mama und Papa! \nIch glaube, du \nbist echt krank!", "C": "...", "D": "Was denkst du dir \neigentlich? Willst \ndu uns verarschen?"  }},
    { text: "Wie kann es Liebe \nzwischen Männern geben? \nHast du dich geirrt??", 
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe und Freundschaft.'], 
    answer_kid: { "A": "&Ich weiß nicht, \n&ob das Liebe oder \n&Freundschaft ist, und \n&ich bin verwirrt...","B": "&Ich bin mir sicher, \n&dass es Liebe ist. \n&Es ist das Gefühl, \n&mein Herzschlag setzte \n&für einen Moment aus. ", "C": "&Vielleicht. Vielleicht geht \n&es nur um eine \n&Freundschaft. ", "D": "&Mama und Papa, \n&ich bin ein Erwachsener, \n&ich kann zwischen Liebe \n&und Freundschaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du \nmusst dich irren!","B": "...", "C": "Glaub Papa, du \nmusst dich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass \ndu keine Frauen magst, \nwenn du noch nie \nmit einer zusammen warst?", 
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Ich fühle mich nur von Jungs angezogen.?', ' Vielleicht könnte ich auch Frauen mögen?', ' Warum sollte ich Frauen mögen?'], 
    answer_kid: { "A": "&Als ich in der \n&Mittelschule war, wurde \n&mir klar, dass ich \n&Jungs mag. Ich habe \n&keine Gefühle für \n&Mädchen, egal wie \n&hübsch, wie süß \n&sie waren. ","B": "&Seit meiner Kindheit \n&fühle ich mich nur \n&zu Jungs hingezogen. \n&Ich interessiere mich nur \n&für gutaussehende \n&Männer, nicht für \n&Mädchen.", "C": "&Vielleicht, vielleicht möge \n&ich auch Mädchen?", "D": "&Ich bin schwul, warum \n&sollte ich mit einer \n&Frau zusammen sein?"},
    answer_papa: { "A": "...","B": "...", "C": "Ja, das ist die \nrichtige Denkweise! Männer \nsollen Frauen mögen.", "D": "Du sagst, du bist schwul, \naber du hast es noch \nnie versucht, woher weißt \ndu, dass du keine \nFrauen magst?"  }},  
];

const part4Questions = [
   { text: "Ich glaube nicht, \nwie ist das möglich, \nwie kannst du ein \nSchwuler sein?", 
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'], 
    answer_kid: { "A": "&Ich bin immer schwul, \n&ich habe es euch nur \n&vorher nicht gesagt.","B": "&Warum kann ich nicht \n&schwul sein? Ist es \n&falsch, schwul zu sein?", "C": "&Mama und Papa, \n&ich meine es ernst. \n&Ich bin schwul. \n&Ich lüge nicht.", "D": "&Ich weiß selber nicht, \n&warum ich Männer mag."},
    answer_papa: { "A": "...","B": "Wie sprichst du \nmit Mama und Papa! \nIch glaube, du \nbist echt krank!", "C": "...", "D": "Was denkst du dir \neigentlich? Willst \ndu uns verarschen?"  }},
    { text: "Wie kann es Liebe \nzwischen Männern geben? \nHast du dich geirrt??", 
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe und Freundschaft.'], 
    answer_kid: { "A": "&Ich weiß nicht, \n&ob das Liebe oder \n&Freundschaft ist, und \n&ich bin verwirrt...","B": "&Ich bin mir sicher, \n&dass es Liebe ist. \n&Es ist das Gefühl, \n&mein Herzschlag setzte \n&für einen Moment aus. ", "C": "&Vielleicht. Vielleicht geht \n&es nur um eine \n&Freundschaft. ", "D": "&Mama und Papa, \n&ich bin ein Erwachsener, \n&ich kann zwischen Liebe \n&und Freundschaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du \nmusst dich irren!","B": "...", "C": "Glaub Papa, du \nmusst dich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass \ndu keine Frauen magst, \nwenn du noch nie \nmit einer zusammen warst?", 
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Ich fühle mich nur von Jungs angezogen.?', ' Vielleicht könnte ich auch Frauen mögen?', ' Warum sollte ich Frauen mögen?'], 
    answer_kid: { "A": "&Als ich in der \n&Mittelschule war, wurde \n&mir klar, dass ich \n&Jungs mag. Ich habe \n&keine Gefühle für \n&Mädchen, egal wie \n&hübsch, wie süß \n&sie waren. ","B": "&Seit meiner Kindheit \n&fühle ich mich nur \n&zu Jungs hingezogen. \n&Ich interessiere mich nur \n&für gutaussehende \n&Männer, nicht für \n&Mädchen.", "C": "&Vielleicht, vielleicht möge \n&ich auch Mädchen?", "D": "&Ich bin schwul, warum \n&sollte ich mit einer \n&Frau zusammen sein?"},
    answer_papa: { "A": "...","B": "...", "C": "Ja, das ist die \nrichtige Denkweise! Männer \nsollen Frauen mögen.", "D": "Du sagst, du bist schwul, \naber du hast es noch \nnie versucht, woher weißt \ndu, dass du keine \nFrauen magst?"  }},  
];

const part5Questions = [
   { text: "Ich glaube nicht, \nwie ist das möglich, \nwie kannst du ein \nSchwuler sein?", 
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'], 
    answer_kid: { "A": "&Ich bin immer schwul, \n&ich habe es euch nur \n&vorher nicht gesagt.","B": "&Warum kann ich nicht \n&schwul sein? Ist es \n&falsch, schwul zu sein?", "C": "&Mama und Papa, \n&ich meine es ernst. \n&Ich bin schwul. \n&Ich lüge nicht.", "D": "&Ich weiß selber nicht, \n&warum ich Männer mag."},
    answer_papa: { "A": "...","B": "Wie sprichst du \nmit Mama und Papa! \nIch glaube, du \nbist echt krank!", "C": "...", "D": "Was denkst du dir \neigentlich? Willst \ndu uns verarschen?"  }},
    { text: "Wie kann es Liebe \nzwischen Männern geben? \nHast du dich geirrt??", 
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe und Freundschaft.'], 
    answer_kid: { "A": "&Ich weiß nicht, \n&ob das Liebe oder \n&Freundschaft ist, und \n&ich bin verwirrt...","B": "&Ich bin mir sicher, \n&dass es Liebe ist. \n&Es ist das Gefühl, \n&mein Herzschlag setzte \n&für einen Moment aus. ", "C": "&Vielleicht. Vielleicht geht \n&es nur um eine \n&Freundschaft. ", "D": "&Mama und Papa, \n&ich bin ein Erwachsener, \n&ich kann zwischen Liebe \n&und Freundschaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du \nmusst dich irren!","B": "...", "C": "Glaub Papa, du \nmusst dich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass \ndu keine Frauen magst, \nwenn du noch nie \nmit einer zusammen warst?", 
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Ich fühle mich nur von Jungs angezogen.?', ' Vielleicht könnte ich auch Frauen mögen?', ' Warum sollte ich Frauen mögen?'], 
    answer_kid: { "A": "&Als ich in der \n&Mittelschule war, wurde \n&mir klar, dass ich \n&Jungs mag. Ich habe \n&keine Gefühle für \n&Mädchen, egal wie \n&hübsch, wie süß \n&sie waren. ","B": "&Seit meiner Kindheit \n&fühle ich mich nur \n&zu Jungs hingezogen. \n&Ich interessiere mich nur \n&für gutaussehende \n&Männer, nicht für \n&Mädchen.", "C": "&Vielleicht, vielleicht möge \n&ich auch Mädchen?", "D": "&Ich bin schwul, warum \n&sollte ich mit einer \n&Frau zusammen sein?"},
    answer_papa: { "A": "...","B": "...", "C": "Ja, das ist die \nrichtige Denkweise! Männer \nsollen Frauen mögen.", "D": "Du sagst, du bist schwul, \naber du hast es noch \nnie versucht, woher weißt \ndu, dass du keine \nFrauen magst?"  }},  
];

const part6Questions = [
   { text: "Ich glaube nicht, \nwie ist das möglich, \nwie kannst du ein \nSchwuler sein?", 
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'], 
    answer_kid: { "A": "&Ich bin immer schwul, \n&ich habe es euch nur \n&vorher nicht gesagt.","B": "&Warum kann ich nicht \n&schwul sein? Ist es \n&falsch, schwul zu sein?", "C": "&Mama und Papa, \n&ich meine es ernst. \n&Ich bin schwul. \n&Ich lüge nicht.", "D": "&Ich weiß selber nicht, \n&warum ich Männer mag."},
    answer_papa: { "A": "...","B": "Wie sprichst du \nmit Mama und Papa! \nIch glaube, du \nbist echt krank!", "C": "...", "D": "Was denkst du dir \neigentlich? Willst \ndu uns verarschen?"  }},
    { text: "Wie kann es Liebe \nzwischen Männern geben? \nHast du dich geirrt??", 
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe und Freundschaft.'], 
    answer_kid: { "A": "&Ich weiß nicht, \n&ob das Liebe oder \n&Freundschaft ist, und \n&ich bin verwirrt...","B": "&Ich bin mir sicher, \n&dass es Liebe ist. \n&Es ist das Gefühl, \n&mein Herzschlag setzte \n&für einen Moment aus. ", "C": "&Vielleicht. Vielleicht geht \n&es nur um eine \n&Freundschaft. ", "D": "&Mama und Papa, \n&ich bin ein Erwachsener, \n&ich kann zwischen Liebe \n&und Freundschaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du \nmusst dich irren!","B": "...", "C": "Glaub Papa, du \nmusst dich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass \ndu keine Frauen magst, \nwenn du noch nie \nmit einer zusammen warst?", 
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Ich fühle mich nur von Jungs angezogen.?', ' Vielleicht könnte ich auch Frauen mögen?', ' Warum sollte ich Frauen mögen?'], 
    answer_kid: { "A": "&Als ich in der \n&Mittelschule war, wurde \n&mir klar, dass ich \n&Jungs mag. Ich habe \n&keine Gefühle für \n&Mädchen, egal wie \n&hübsch, wie süß \n&sie waren. ","B": "&Seit meiner Kindheit \n&fühle ich mich nur \n&zu Jungs hingezogen. \n&Ich interessiere mich nur \n&für gutaussehende \n&Männer, nicht für \n&Mädchen.", "C": "&Vielleicht, vielleicht möge \n&ich auch Mädchen?", "D": "&Ich bin schwul, warum \n&sollte ich mit einer \n&Frau zusammen sein?"},
    answer_papa: { "A": "...","B": "...", "C": "Ja, das ist die \nrichtige Denkweise! Männer \nsollen Frauen mögen.", "D": "Du sagst, du bist schwul, \naber du hast es noch \nnie versucht, woher weißt \ndu, dass du keine \nFrauen magst?"  }},  
];
function quit() {
    currentQuestionIndex = 0;
    currentPartQuestionIndex = 0;
    score = 0;
    part = 1; 
    displayQuestion();} 


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
            currentText=currentText.split("\n").slice(-15).join("\n");
            var currentText_list=currentText.split("\n\n");
            var para_num=currentText_list.length;
            if (para_num>1){
            var currentText1=currentText_list.slice(0,para_num-1).join("\n\n");
            var currentText2=currentText_list.slice(-1).join("\n\n");
            container.innerHTML="<span style='color:#D5D5D5'>"+currentText1+"</span>"+"\n\n"+currentText2;
            }
            else{container.innerHTML=currentText;}

            i++;
            //setTimeout(showNextChar, 50); // 调整速度
        }
        else { // 如果已经显示了所有文本
            clearInterval (done);
            if(currentQuestionIndex===part1Questions.length) {
            setTimeout(nextQuestion, 3000); }  

        }
    }
    var done=setInterval (showNextChar,50);

    //showNextChar();
}
function show_text(question, kid, papa) {
    var fullText = question + kid + papa; // 组合整个文本
    var num_q = question.length; // question文本的长度
    var num_k = num_q + kid.length; // kid文本结束的位置
    var i = num_q; // 从文本的第一个字符开始
    var currentText = question +'<span style="line-height: 20px;font-size: 15px;"><br><br></span>'; // 当前逐字显示的文本

    function show() {
        if (i < fullText.length) {
            // 如果当前索引在 question 与 kid 之间
            if(fullText.charAt(i)==="&"){currentText +="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";i++;}
            else if(i===num_k){currentText +='<span style="line-height: 20px;font-size: 15px;"><br><br></span>'}
            currentText += fullText.charAt(i);
            currentText=currentText.split("\n").slice(-8).join("\n");
        
        }
        document.getElementById("question").innerHTML = currentText;
        i++; // 移动到下一个字符
        if (i >= fullText.length) { // 如果已经显示了所有文本
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
    let current_part_color;
    let shadow_color_nein;

    switch (part) {
        case 1:
            current_part = part1Questions;
            current_part_color = '#FFC300';
            shadow_color_nein='0px 2px 6px 0px rgba(191, 139, 0, 0.1)';
            break;
        case 2:
            current_part = part2Questions;
            current_part_color = '#33A9FF';
            shadow_color_nein='0px 1px 5px 0px rgba(0, 111, 193, 0.1)';

            break;
        case 3:
            current_part = part3Questions;
            current_part_color = '#FF3333';
            shadow_color_nein='0px 1px 5px 0px rgba(189, 0, 0, 0.1)';
            break;
        case 4:
            current_part = part4Questions;
            current_part_color = '#00A351';
            shadow_color_nein='0px 1px 5px 0px rgba(0, 140, 70, 0.1)';
            break;        
        case 5:
            current_part = part5Questions;
            current_part_color = '#770088';
            shadow_color_nein='0px 1px 5px 0px rgba(96, 0, 110, 0.1)';
            break;
        case 6:
            current_part = part6Questions;
            current_part_color = '#FF7400';
            shadow_color_nein='0px 1px 5px 0px rgba(140, 64, 0, 0.1)';
            break;
        // 添加更多的case语句
        default:
            current_part = part1Questions;
            current_part_color = '#FFC300';
            shadow_color_nein='0px 2px 6px 0px rgba(191, 139, 0, 0.1)';
            // 如果part不是1或2
            break;
    };

    if (currentQuestionIndex<part1Questions.length) {
        question = part1Questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.text;
        document.getElementById('part1-answers').style.display = 'block';
        document.getElementById('part2-answers').style.display = 'none';
    } 
    else if(currentQuestionIndex===part1Questions.length) {
        document.getElementById('score').style.display = 'none';       
        document.getElementById('buttonNextQustion').style.display = 'block';       
        show_part2_text(part2Questions[0].test); 
        document.getElementById('question').style.display = 'none';       
        document.getElementById('part1-answers').style.display = 'none';
    }
    else {
        document.getElementById('score').style.display = 'block';       
        document.getElementById('buttonNextQustion').style.display = 'none';       
        document.getElementById('part2_text').style.display = 'none';
        document.getElementById('question').style.display = 'block';
        question = current_part[currentPartQuestionIndex];
        document.getElementById('question').style.fontSize = "30px";

        //显示问题和选
        disableAnswerButtons();
        show_questions(question.text);
        //document.getElementById('question').innerHTML  = questionHtml;

        document.getElementById('part2-answers').style.display = 'block';
        set_button_color();
        document.getElementById('buttonA').textContent = question.options[0];
        document.getElementById('buttonA').style.backgroundColor = "white"; 
        document.getElementById('buttonA').style.color = current_part_color;
        document.getElementById('buttonA').style.boxShadow=shadow_color_nein;
        document.getElementById('buttonB').textContent = question.options[1];
        document.getElementById('buttonB').style.backgroundColor = "white"; 
        document.getElementById('buttonB').style.color = current_part_color;
        document.getElementById('buttonB').style.boxShadow=shadow_color_nein;
        document.getElementById('buttonC').textContent = question.options[2];
        document.getElementById('buttonC').style.backgroundColor = "white"; 
        document.getElementById('buttonC').style.color = current_part_color;
        document.getElementById('buttonC').style.boxShadow=shadow_color_nein;
        document.getElementById('buttonD').textContent = question.options[3];
        document.getElementById('buttonD').style.backgroundColor = "white"; 
        document.getElementById('buttonD').style.color = current_part_color;
        document.getElementById('buttonD').style.boxShadow=shadow_color_nein;
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
    let current_part;
    let current_part_color;
    let shadow_color_ja;

    switch (part) {
        case 1:
            current_part = part1Questions;
            current_part_color = '#FFC300';
            shadow_color_ja='0px 2px 6px 0px rgba(103, 75, 0, 0.3)';
            break;
        case 2:
            current_part = part2Questions;
            current_part_color = '#33A9FF';
            shadow_color_ja='0px 1px 4px 0px rgba(26, 93, 142, 0.25)';
            break;
        case 3:
            current_part = part3Questions;
            current_part_color = '#FF3333';
            shadow_color_ja='0px 1px 5px 0px rgba(80, 0, 0, 0.25)';
            break;
        case 4:
            current_part = part4Questions;
            current_part_color = '0px 1px 5px 0px rgba(1, 45, 23, 0.25)';
            shadow_color_ja='';
            break;        
        case 5:
            current_part = part5Questions;
            current_part_color = '0px 1px 5px 0px rgba(41, 0, 47, 0.3)';
            shadow_color_ja='';
            break;
        case 6:
            current_part = part6Questions;
            current_part_color = '0px 1px 5px 0px rgba(107, 49, 0, 0.3)';
            shadow_color_ja='';
            break;
        // 添加更多的case语句
        default:
            current_part = part1Questions;
            current_part_color = '#FFC300';
            shadow_color_ja='0px 2px 6px 0px rgba(103, 75, 0, 0.3)';
            // 如果part不是1或2
            break;
    };
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
        button.style.backgroundColor = current_part_color;
        button.style.boxShadow = shadow_color_ja;
        button.style.color = '#FFFFFF';
        disableAnswerButtons();
        question = current_part[currentPartQuestionIndex];
        kid=question.answer_kid[answer];
        papa=question.answer_papa[answer];
        if (papa === "...") {
            score += 1; // 正确答案加 10 分
        }
        show_text(question.text,kid,papa);

        
    }
   
}

function show_score() {    
    if (part === 1) {
    document.getElementById('img1').src = 'Union1.png';
    document.getElementById('img2').src = 'Union2.png';
    document.getElementById('img3').src = 'Union3.png';
    document.getElementById('img4').src = 'Union4.png';
    document.getElementById('img5').src = 'Union5.png';


} else if (part === 2) {
    document.getElementById('img1').src = 'blue1.png';
    document.getElementById('img2').src = 'blue2.png';
    document.getElementById('img3').src = 'blue3.png';
    document.getElementById('img4').src = 'blue4.png';
    document.getElementById('img5').src = 'blue5.png';} 
 else if (part === 3) {
    document.getElementById('img1').src = 'red1.png';
    document.getElementById('img2').src = 'red2.png';
    document.getElementById('img3').src = 'red3.png';
    document.getElementById('img4').src = 'red4.png';
    document.getElementById('img5').src = 'red5.png';} 
else if (part === 4) {
    document.getElementById('img1').src = 'green1.png';
    document.getElementById('img2').src = 'green2.png';
    document.getElementById('img3').src = 'green3.png';
    document.getElementById('img4').src = 'green4.png';
    document.getElementById('img5').src = 'green5.png';}
else if (part === 5) {
    document.getElementById('img1').src = 'lila1.png';
    document.getElementById('img2').src = 'lila2.png';
    document.getElementById('img3').src = 'lila3.png';
    document.getElementById('img4').src = 'lila4.png';
    document.getElementById('img5').src = 'lila5.png';}
else {
    document.getElementById('img1').src = 'orange1.png';
    document.getElementById('img2').src = 'orange2.png';
    document.getElementById('img3').src = 'orange3.png';
    document.getElementById('img4').src = 'orange4.png';
    document.getElementById('img5').src = 'orange5.png';

    };
    if (score === 0) {
    document.getElementById('img1').style.display = 'block';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';
    document.getElementById('img5').style.display = 'none';

} else if (score === 1) {
    document.getElementById('img2').style.display = 'block';
} else if (score === 2) {
    document.getElementById('img3').style.display = 'block';
} else {
    document.getElementById('img4').style.display = 'block';
    document.getElementById('img5').style.display = 'block';

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
    currentPartQuestionIndex++;
    if ((currentQuestionIndex === part1Questions.length) || (currentQuestionIndex === part1Questions.length+part2Questions.length) ||(currentQuestionIndex === part1Questions.length+part2Questions.length+part3Questions.length) ||(currentQuestionIndex === part1Questions.length+part2Questions.length+part3Questions.length+part4Questions.length) ||(currentQuestionIndex === part1Questions.length+part2Questions.length+part3Questions.length+part4Questions.length+part5Questions.length)) {
        part ++;
        score=0;
        show_score();
        currentPartQuestionIndex=0;
        displayQuestion();
    } else  {
        displayQuestion();
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

