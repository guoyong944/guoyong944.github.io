// 全局变量
let currentQuestionIndex = 0;
let currentPartQuestionIndex = 0;
let score = 0;
let part = 1; // 部分 1

// 第一部分的问题
const part1Questions = [
{text: "Glauben Sie, dass Sie unab- \nhängig von Ihrer sexuellen \nOrientierung das Recht \nhaben, ein glückliches und \nerfülltes Leben zu führen?", },
{text: "Glauben Sie, dass es für die \npersönliche Entwicklung \nwichtig ist, seine sexuelle \nOrientierung zu kennen \nund zu akzeptieren?", },
{text: "Glauben Sie, dass Sie sich \ndurch Ihr Coming-out freier \nund echter in Ihrem Leben \nfühlen?", },
{text: "Sind Sie bereit, sich der \nHerausforderung zu stellen, \ndie verschiedenen mög- \nlichen Reaktionen und \nErgebnisse Ihres Coming- \nouts zu erkunden?", },
]; 


// 第二部分的问题
const part2Questions = [
    { test:"Papa, Mama...\nIch habe euch etwas \nWichtiges zu sagen...",
    text: "&Papa, Mama... \n&Ich habe euch etwas Wich- \n&tiges zu sagen. Es ist ein \n&Geheimnis, das seit vielen \n&Jahren in meinem Herzen \n&verborgen ist...\n\nWas ist denn los, \nmein Sohn?\n\n&Ich habe mich immer an \n&eure Liebe und Unterstüt- \n&zung erinnert, seit ich ein \n&Kind war... Ich bin sehr \n&glücklich, in dieser Familie \n&zu leben. Ich werde euch \n&und unsere Familie immer \n&lieben, und Ich weiß auch, \n&dass ihr wollt, dass ich \n&glücklich bin. Also...\n\nNa und? Mach dir keine \nSorgen, mein Sohn, sprich \nmit Mama und Papa.\n\n&Also, Ich will euch mal was \n&klar machen. Ihr habt euch \n&immer Sorgen gemacht, \n&wann ich eine Freundin \n&habe, wann ich heirate. Ich \n&habe sie mit verschiedenen \n&Ausreden gemieden. Aber \n&ich möchte euren Fragen \n&nicht mehr ausweichen. Es \n&ist wahr, dass ich nun keine \n&Freundin haben werde und \n&ich will nicht heiraten, weil \n&ich schwul bin und Männer \n&mag.\n\n..."},
    {text: "Ich glaube nicht, wie ist das \nmöglich, wie kannst du ein \nSchwuler sein?",
    options: [' Ich bin seit langem schwul', ' Warum kann ich nicht schwul sein?', ' Es ist wahr, ich bin schwul. Es ist kein Witz', ' Ich weiß nicht, warum...'],
  answer_kid: { "A": "&Ich bin immer schwul, ich \n&habe es euch nur vorher \n&nicht gesagt.","B": "&Warum kann ich nicht \n&schwul sein? Ist es falsch, \n&schwul zu sein?", "C": "&Mama und Papa, ich meine \n&es ernst. Ich bin schwul. Ich \n&lüge nicht.", "D": "&Ich weiß selber nicht, \n&warum ich Männer mag."},
  answer_papa: { "A": "...","B": "Wie sprichst du mit Mama \nund Papa! Ich glaube, du \nbist echt krank!", "C": "...", "D": "Was denkst du dir \neigentlich? Willst du uns  \nverarschen?"  }},
   { text: "Wie kann es Liebe zwischen \nMännern geben? Hast du \ndich geirrt?",
    options: [' Ich weiß nicht, ob es Liebe ist', ' Ich bin mir sicher, dass es Liebe ist?', ' Vielleicht. Vielleicht sind wir nur Freunde. ', ' Ich kann unterscheiden zwischen Liebe \nund Freundschaft.'],
    answer_kid: { "A": "&Ich weiß nicht, ob das \n&Liebe oder Freundschaft  \n&ist, und ich bin verwirrt...","B": "&Ich bin mir sicher, dass es \n&Liebe ist. Es ist das Gefühl, \n&mein Herzschlag setzte für \n&einen Moment aus. ", "C": "&Vielleicht. Vielleicht geht es \n&nur um eine Freundschaft.", "D": "&Mama und Papa, ich bin ein \n&Erwachsener, ich kann zwi- \n&schen Liebe und Freund- \n&schaft unterscheiden."},
    answer_papa: { "A": "Glaub Mama, du musst \ndich irren!","B": "...", "C": "Glaub Papa, du musst \ndich irren!", "D": "..."  }},  
    { text: "Wie weißt du, dass du \nkeine Frauen magst, wenn \ndu noch nie mit einer \nzusammen warst?",
    options: [' Ich mag Jungs schon seit der Mittelschule', ' Vielleicht könnte ich auch Frauen mögen?', ' Ich fühle mich nur von Jungs angezogen.?', ' Warum sollte ich Frauen mögen?'],
    answer_kid: { "A": "&Als ich in der Mittelschule \n&war, wurdemir klar, dass  \n&ich Jungs mag. Ich habe \n&keine Gefühle für Mädchen, \n&egal wie hübsch, wie süß \n&sie waren. ","B": "&Vielleicht, vielleicht möge \n&ich auch Mädchen?", "C": "&Seit meiner Kindheit fühle \n&ich mich nur zu Jungs hin- \n&gezogen. Ich interessiere \n&mich nur für hübsche Män- \n&ner, nicht für Mädchen.", "D": "&Ich bin schwul, warum \n&sollte ich mit einer Frau \n&zusammen sein?"},
    answer_papa: { "A": "...","B": "Ja, das ist die richtige \nDenkweise! Männer sollen \nFrauen mögen.", "C": "…", "D": "Du sagst, du bist schwul, \naber du hast es noch nie \nversucht, woher weißt du, \ndass du keine \nFrauen magst?"  }}
];

const part3Questions = [
    { text: "Du bist schwul, du wirst \nuns keine Nachkommen in \ndieser Familie hinterlassen. \nDu darfst nicht so egois- \ntisch sein!",
    options: [' Ihre Wertvorstellungen sind so rückständig', ' Die sexuelle Orientierung ist meine Sache', ' Ich soll Frauen nicht betrügen', ' Es gibt viele Möglichkeiten, Nachkommen \nzu hinterlassen'],
  answer_kid: { "A": "&Es ist das 21. Jahrhundert, \n&und diese rückständigen \n&Werte sind egoistisch. \n&Wofür hältst du mich, nur \n&für ein Werkzeug, um \n&Nachkommen zu hinter- \n&lassen?","B": "&Papa, ob ich Männer oder \n&Frauen mag, ist meine \n&Sache, und ob ich Kinder \n&haben will oder nicht, ist \n&auch meine Sache. Du \n&hältst dich da einfach raus.", "C": "&Ich kann die Mädchen nicht \n&anlügen, indem ich so tue, \n&als würde ich sie mögen. \n&Ich kann nicht zulassen, \n&dass andere wegen mir ihr \n&Glück opfern.", "D": "&Wenn ich in der Zukunft \n&wirklich ein Kind haben \n&möchte, kann ich das durch \n&Adoption, reproduktions- \n&medizinische Verfahren \n&usw. erreichen. Eine Frau \n&zu heiraten, um ein Kind zu \n&bekommen, ist nicht der \n&einzige Weg."},
   answer_papa: { "A": "Was ist das für eine Ein- \nstellung? Auch im 21. Jahr- \nhundert bist du immer noch \nein Teil der Familie und \nmusst dich an die Werte \nder Familie halten!","B": "Was sagst du denn da? \nDu denkst, du bist erwach- \nsen und kannst so mit uns \nreden?", "C": "...", "D": "..."  }},
  { text: "Sprich mit Mama, bist du \ndurch diese verdorbenen \nwestlichen Ideen einer \nGehirnwäsche unterzogen \nworden. Denkst du, wir \nsind diejenigen, die dich \ngefesselt haben, und dann \ngehst du diesem schäbigen \nLeben nach?",
    options: [' Das ist, was ich wirklich über mich weiß', ' Ich weiß nicht, was ich davon halte', ' Ich habe meine eigene Denkweise', ' Homosexuelle gibt es in jeder Zivilisation'],
  answer_kid: { "A": "&Mama, das ist kein kulture- \n&ller Einfluss. Das ist es, was \n&ich wirklich über mich weiß. \n&Ich habe mein wahres Ich \n&kennengelernt und hatte \n&den Mut, mich zu äußern.","B": "&Ich weiß nicht... Ich denke \n&einfach, ich sollte mein \n&wahres Selbst finden, was \n&auch immer das ist.", "C": "&Das ist euer Vorurteil. Ich \n&habe mein eigenes Denken \n&und Streben nach meinem \n&zukünftigen Leben, ich \n&brauche euer Urteil nicht.", "D": "&Mama, Untersuchungen \n&zufolge machen Schwule \n&und Lesben etwa 5 % der \n&Bevölkerung aus, und sie \n&bestehen in allen Gesell- \n&schaftsschichten, in allen \n&Arten von Familien, in allen \n&Berufen, Ethnien, Religion- \n&en, Ländern und Rassen. \n&Das ist seit dem Altertum."},
   answer_papa: { "A": "...","B": "Du willst deine Unreife und \nVerantwortungslosigkeit \nverbergen, indem du dein \nwahres Selbst findest", "C": "Wir machen uns Sorgen um \ndeine Zukunft und dein \nLeben, und das ist es, was \ndu von uns denkst? Du bist \nso geblendet von ihnen, \ndass du nichts sehen kannst!", "D": "..."  }},
  { text: "Leugnest du es immer \nnoch? Mit wem hast du \ndich denn rumgetrieben, \num diesen Unsinn zu \nlernen? Mama und Papa \nhaben dich nicht zum \nSchwulsein erzogen!",
    options: [' Meine Freunde sind alle super Leute', ' Es ist mein Recht, Freunde zu haben', ' Sie sind nur Leute, die mich verstehen', ' Die sexuelle Orientierung ist ein Ergebnis \nder Selbstentdeckung'],
  answer_kid: { "A": "&Keine Sorge, Mama und \n&Papa, ich bin von groß- \n&artigen Menschen um- \n&geben, die sonnig, freund- \n&lich und liebevoll sind. Ihr \n&werdet sie sicher auch \n&liebhaben. Meine sexuelle \n&Orientierung ist nicht \n&etwas, was ich von irgend- \n&jemandem gelernt habe, \n&sie ist Teil dessen, was ich \n&bin.","B": "&Es ist mein Recht, Freunde \n&zu finden, die ich mag, und \n&ich weiß, wer wirklich für \n&mich da ist.", "C": "&Ich hätte nicht gedacht, \n&dass ihr so viele Fragen \n&haben würdet, ich habe \n&einfach ein paar Leute \n&gefunden, die mir zuhören \n&und verstehen, wie ich \n&mich fühle.", "D": "&Mama und Papa...\n&Ich verstehe eure Verwirr- \n&ung, aber bitte glaubt mir, \n&meine Sexualität ist nichts, \n&was ich von der Außenwelt \n&gelernt habe. Es ist etwas, \n&das ich in meinem Selbst- \n&verständnis entdeckt habe, \n&als ich aufgewachsen bin, \n&und es ist Teil dessen, was \n&ich bin."},
   answer_papa: { "A": "...","B": "Sie lügen dich alle an! \nWir sind deine Eltern, und \nwir sind die einzigen, die \nwirklich das Beste für dich \nwollen!", "C": "Sie lügen dich alle an! \nWir sind deine Eltern, und \nwir sind die einzigen, die \nwirklich das Beste für dich \nwollen! ", "D": "..."  }}
];

const part4Questions = [
    { text: "Hör mir zu, lass uns jetzt \nzum Psychiater gehen und \nvon der Homosexualität \ngeheilt werden.",
    options: [' OK, damit ihr mich besser versteht', ' Konversionstherapie für Schwule ist grausam', ' Ich bin gesund und brauche keine Therapie', ' Ich habe keine Krankheit, ich gehe nicht hin'],
  answer_kid: { "A": "&Mama, ich gehe gerne mit \n&dir zu einem Psychiater, \n&aber nicht, um mich zu \n&ändern. Ich bin sicher, ein \n&Profi wird Ihnen erklären, \n&dass meine sexuelle Orien- \n&tierung natürlich ist und \n&keine Krankheit. Ich hoffe, \n&wir können bei dieser Gele- \n&genheit lernen, uns gegen- \n&seitig zu verstehen und zu \n&unterstützen.","B": '&Papa, Mama, habt ihr von \n&der so genannten homo- \n&sexuellen Konversions- \n&therapie gehört, bei \n&der versucht wird, die sexuelle \n&Orientierung eines Men- \n&schen durch extreme \n&Methoden wie Elektro- \n&schocks und das Auslösen \n&von Erbrechen zu ändern. \n&Anstatt Homosexualität zu \n&"heilen", kann diese Art \n&von Therapie ein tiefes \n&psychologisches Trauma \n&bei der Person verursachen.', "C": "&Mama, so ist es nicht. Seit \n&2001 ist Homosexualität in \n&China nicht mehr eine \n&Krankheit. Homosexualität \n&ist keine Geisteskrankheit. \n&Homosexualität ist kein \n&Problem, kein Fehler, und \n&sie muss nicht behandelt \n&werden. Ich hoffe, wir \n&suchen nicht nach Verände- \n&rung, sondern nach Ver- \n&ständnis und Akzeptanz, \n&wenn wir zu einem Thera- \n&peuten gehen.", "D": "&Homosexualität ist keine \n&Krankheit, sie muss nicht \n&behandelt werden. Ihr seid \n&diejenigen, die zum Arzt \n&gehen müssen, um diese \n&Denkweise zu ändern."},
   answer_papa: { "A": "...","B": "Wenn du eine Krankheit \nhast, müssen wir sie heilen, \nauch wenn es schwer ist. \nAls Eltern ist es unsere \nAufgabe, dir zu helfen, \nwiederein normales Leben \nzu führen.", "C": "...", "D": "Psychisch kranke Menschen \nsagen, sie seien nicht krank. \nHör zu, wir gehen zum Arzt \nund lass dich behandeln, \ndas ist gut für deine Zu- \nkunft. Jetzt verstehst du \nuns noch nicht, aber in der \nZukunft wirst du uns dank- \nbar sein. " }},
{ text: "Ich bitte dich, schau dir \nmehr Mädchen an. Falls du \nein Mädchen triffst, das dir \ngefällt, kann sich deine sex- \nuelle Orientierung ändern. \nWoher willst du wissen, \ndass du es nicht magst, \nwenn du es nicht aus- \nprobiert hast?",
    options: [' Ich werde es für dich versuchen', ' Hat dir eine Frau jemals gefallen, Mama?', ' Ich werde mich nicht für euch ändern', ' Ich bin mir über meine sexuelle Orientier- \nung sicher.'],
  answer_kid: { "A": "&Mama, ich will dich nicht \n&enttäuschen, also ich kann \n&es versuchen, mehr Mäd- \n&chen zu kennen, wenn dich \n&das wirklich zufrieden \n&macht.","B": "&Mama, würdest du dich in \n&deine weiblichen Freunde \n&und weiblichen Kolleginnen \n&verlieben? Wenn du das \n&nicht wollen, weil du hete- \n&rosexuell bist, dann magst \n&du das gleiche Geschlecht \n&nicht. Das ist genauso bei \n&mir: ich mag keine Frauen \n&und will mit einem Mann \n&zusammen.", "C": "&Ich werde mich nicht \n&ändern, um dir zu gefallen. \n&Wer ich bin und wen ich \n&mag, ist meine Sache und \n&nicht etwas, das ihr ändern \n&könnt, wenn ihr wollt.", "D": "&Mama, nach so vielen \n&Jahren bin ich mir ganz \n&sicher, was meine sexuelle \n&Orientierung angeht. Das \n&ist keine Alternative, die \n&man durch andere Ver-\n&suche ändern kann. Sonst \n&würde ich nicht mit euch \n&reden."},
   answer_papa: { "A": "Das stimmt, es ist ganz \nnatürlich, dass sich Männer \nund Frauen aneinander- \nbinden. Ich bin sicher, du \nkannst dich ändern, mein \nSohn. ","B": "...", "C": "Wir tun das alles nur zu \ndeinem Besten! Denkst du, \ndu verstehst die Liebe? Wie \nkennst du, dass du keine \nFrauen magst, wenn du es \nnicht einmal versucht hast?", "D": "..."  }},
  { text: "Aber wer kümmert sich \ndenn um das Familienleben, \nwenn keine Frau zu Hause \nist? Warum würdest du so \nmüde leben.",
    options: [' Ich kann gut unabhängig leben', ' Ich bin wirklich müde. Ich weiß auch nicht', ' Das ist keine geschlechtsspezifische Aufgabe', ' Ich brauche eure Sorge um eigenen Angele- \ngenheiten nicht'],
  answer_kid: { "A": "&Mama, ich lebe schon seit \n&so vielen Jahren allein, dass \n&ich gut selbstständig leben \n&kann. Keine Sorge, ich kann \n&selbst auf mich aufpassen.","B": "&Ich bin sehr müde, und ich \n&weiß nicht, wie mein zu- \n&künftiges Leben aussehen \n&wird, und Ich bezweifle, ob \n&ich das überhaupt schaffen \n&kann.", "C": "&Mama, für die Familie zu \n&sorgen, ist die Aufgabe \n&von allem, nicht nur der \n&Frauen. In Zukunft werden \n&mein Partner und ich die \n&Verantwortung für die \n&Familie gleichmäßig auf- \n&teilen. Fürsorge und Liebe \n&können von jedem Gesch- \n&lecht kommen.", "D": "&Ich brauche keine Frau, die \n&sich um mich kümmert, und \n&ihr brauchen euch nicht um \n&meine persönlichen Ange- \n&legenheiten zu kümmern. \n&Ich werde ein gutes Leben \n&führen."},
   answer_papa: { "A": "...","B": "Hör zu, es muss immer noch \neine Frau in der Familie sein. \nSo ist das Leben für alle.", "C": "...", "D": "Brauchen wir uns nicht \ndarum zu sorgen? Wenn \ndu krank wirst und Hilfe \nbrauchst, merkst du, wie \nwichtig die Familie ist und \nwie wichtig die Pflege \ndurch eine Frau ist."  }}
];

const part5Questions = [
    { text: "Willst du die ganze Familie \nblamieren? Willst du, dass \nalle über uns lachen? Hast \ndu jemals darüber nach- \ngedacht, wie sich Mama \nund Papa fühlen?",
    options: [' Würde hängt nicht von Vorurteilen ab', ' Ich bin eine Witzfigur in euren Augen', ' Es tut mir leid. Es ist meine Schuld', ' Liebe und Glück sind die wichtigsten Dinge'],
  answer_kid: { "A": "&Mama und Papa, unsere \n&Würde wird nicht von den \n&Vorurteilen der anderen \n&bestimmt. Sie kommt eher \n&aus dem Verständnis und \n&der Unterstützung, die sich \n&unsere Familien gegen- \n&seitig geben. Wir sind in \n&uns selbst stark geworden, \n&und das ist es, was zählt.","B": "&Ich verstehe schon, ich bin \n&eine Witzfigur für euch, \n&und egal, was ich tue, es \n&wird euch nie zufrieden- \n&stellen.", "C": "&Mama und Papa, es tut mir \n&sehr leid, ich wollte meine \n&Familie nicht blamieren. Ich \n&will mich nicht mehr ver- \n&stecken und habe Angst,  \n&euch zu enttäuschen.", "D": "&Mama und Papa...ich habe \n&mich geoutet, nicht um \n&euch Blamage zu bereiten, \n&sondern um wahre Liebe \n&und wahres Glück zu \n&finden. Ich glaube, wenn \n&wir alle unser Leben mit \n&wahrem Glück und Freude \n&führen können, wird es \n&nicht mehr so wichtig sein, \n&was andere denken."},
   answer_papa: { "A": "...","B": "Ist das die Einstellung, mit \nder du mit Mama und Papa \nsprichst? Schämst du dich \nnicht?", "C": "Dachtest du nicht? Dann \ndenke jetzt darüber nach, \ndu musst deinen Fehler \nkorrigieren und mit diesem \nVerhalten aufhören.", "D": " ... " }},
{ text: "Es ist alles Mamas Schuld. \nIch bin nicht gut mit dir auf- \ngewachsen und habe dich \nnicht richtig erzogen.",
    options: [' Mama, es ist nicht deine Schuld', ' Du entscheidest nicht über meine Sexualität', ' Du bist die beste Mutter der Welt', ' Mama, es tut mir wirklich leid'],
  answer_kid: { "A": "&Mama, es ist nicht deine \n&Schuld. Ich hoffe, du weißt, \n&dass ich mich geoutet \n&habe, weil ich dir vertraue. \n&Ich weiß, dass du mich \n&liebst, egal ob ich Männer \n&oder Frauen mag. Wir kön- \n&nen zusammen die Homo- \n&sexualität besser verste- \n&hen, und ich bin wie immer \n&dein toller Sohn.","B": "&Mama, du kannst nicht ent- \n&scheiden, wen ich mag. \n&Sexuelle Orientierung kann \n&man nicht lernen. Egal, wie \n&sehr du dich selbst fertig- \n&machst, ich bin schwul und \n&das kannst du nicht ändern.", "C": "&Du bist die beste Mutter \n&der Welt! Deine Liebe und \n&Akzeptanz haben es mir \n&ermöglicht, meine wahre \n&Identität gefunden und \n&akzeptiert zu haben. Sich \n&zu outen bedeutet nicht, \n&dass etwas nicht richtig ist, \n&es ist nur ein Weg, damit \n&du mich besser verstehst.", "D": "&Mama, es tut mir sehr leid \n&aber ich weiß nicht, was ich \n&sonst tun soll. mir ist egal, \n&ob mich irgendjemand auf \n&dieser Welt nicht akzep- \n&tiert. Ich will nur, dass du \n&und Papa mich akzeptieren."},
   answer_papa: { "A": "...", "B": "Wie kannst du so mit Mama \nreden? Ich glaube, du hast \ngerade draußen schlechte \nDinge gelernt!", "C": "...", "D": "Meinst du, alles wird gut, \nsolange wir dich akzep- \ntieren? Aber hast du jemals darüber nachgedacht, wie \nviel Druck und Scham das \nfür dich bedeuten wird?"  }},
  { text: "Aber, mein Sohn, du bist ja \nso gut, ich war immer stolz \nauf dich, warum willst du \nschwul sein?",
    options: [' Auch Schwule können so gut sein!', ' Als Schwuler wird einem alles verweigert?', ' Böse Jungs dürfen schwul sein?', ' Die sexuelle Orientierung ist nur ein Teil \nmeines Lebens'],
  answer_kid: { "A": "&Mama, Schwule können \n&genauso gut sein. Der CEO \n&von Apple, Cook, und dein \n&Lieblingssänger aus Hong- \n&kong, der Schauspiele, \n&Leslie Cheung - sie sind alle \n&schwul. Ich werde  ihrem \n&Beispiel folgen und weiter \n&lernen und gut arbeiten.","B": "&Wegen dieser Kleinigkeit, \n&dass ich schwul bin, wollt \n&ihr ganz alles über mich \n&ablehnen?", "C": "&Wenn ich ein böser Junge \n&bin, kann ich also schwul \n&sein?", "D": "&Die sexuelle Orientierung \n&ist nur ein sehr kleiner Teil \n&meines Lebens. Ich habe so \n&viele andere Dinge zu tun, \n&meinen Job, mein tägliches \n&Leben, meine Hobbys. Am \n&wichtigsten ist, dass ich \n&immer das Kind bin, das \n&euch alle liebt."},
   answer_papa: { "A": "...","B": "Wie kann das eine Kleinig- \nkeit sein! Es ist für dich die \nwichtigste Sache in deinem \nLeben. Es gibt nichts wich- \ntiger als das.", "C": "Wie kannst du so reden \nund Mama und Papa ver- \nletzen? Wir wollen nur, dass \ndu ein gutes Leben hast.", "D": "..."  }}
];

const part6Questions = [
    { text: "Mein Sohn, du bist nur von \nder Sehnsucht überwältigt. \nEs gibt keine stabile Be- \nziehung zwischen Männern. \nWas wirst du tun, wenn die \nLeidenschaft vorbei ist? \nWillst du weiterhin immer \nso bleiben?",
    options: [' Ich habe auch Angst vor dem Alleinsein', ' Ich suche auch nach einer dauerhaften Liebe', ' Es ist mein eigenes Leben', ' Heterosexuelle haben auch instabile \nBeziehungen.'],
  answer_kid: { "A": "&Ich habe auch Angst vor \n&dem Alleinsein. Manchmal \n&frage ich mich, ob mein \n&Gedanke nur ein Impuls ist, \n&und wenn die Leidenschaft \n&vorbei ist, ob ich dann \n&allein sein werde, wie ihr \n&gesagt habt.","B": "&Mama und Papa, ich suche \n&auch nach einer dauer- \n&haften Beziehung wie ihr. \n&Ich träume auch davon, \n&eine Familie und einen \n&Partner zu haben, der mich \n&liebt und mit dem ich zu- \n&sammen sein kann. Das \n&Geschlecht ändert nichts \n&an meinem Streben nach \n&Stabilität in der Liebe.", "C": "&Ich brauche weder euer \n&Urteil noch eure Zustim- \n&mung für meine Liebe. Ich \n&führe mein eigenes Leben \n&und wen ich liebe und wen \n&nicht, das ist meine Sache.", "D": "&Mama und Papa, auch in \n&heterosexuellen Familien \n&gibt es Scheidungen, häus- \n&liche Gewalt, Fremdgehen \n&usw. Es ist also nicht so, \n&dass man glücklich wird, \n&wenn man eine heterosex- \n&uelle Partnerin findet und \n&heiratet. Und es bedeutet \n&auch nicht unbedingt, dass \n&eine Familie, die aus zwei \n&Personen des gleichen \n&Geschlechts besteht, un- \n&glücklich sein muss."},
   answer_papa: { "A": "Dann nimm nicht diesen \nWeg! Versuch es mit einer \nnormalen Beziehung! Such \ndir eine Frau zum Daten, \nwäre das nicht stabiler? \nLebe wie ein normaler \nMensch. ","B": "...", "C": "Deine selbstgerechte Halt- \nung wird dir irgendwann \neine Lektion erteilen. Und \nwenn es so weit ist, wirst \ndu wissen, wer derjenige \n ist, der gut für dich ist.", "D": " ... " }},
{ text: "Ich habe es im Fernsehen \ngehört. dass Schwuler ein \nhohes HIV-Risiko haben. \nWas tun, wenn du infiziert \nbist? Das ist eine lebens- \nlange Sache.",
    options: [' Ich bin mir dieses Themas voll bewusst', ' Das ist euer Vorurteil gegen Homosexualität', ' Ich will mich nicht anstecken', ' Das Risiko ist für alle gleich. Prävention ist \ndas Wichtigste.'],
  answer_kid: { "A": "&Mama und Papa, ich bin \n&mir dessen voll bewusst: \n&HIV wird sexuell übertra- \n&gen, aber es entsteht nicht \n&ohne Grund. Solange man \n&mit seinem Partner Vor- \n&sichtsmaßnahmen trifft, \n&wird man sich nicht an- \n&stecken, egal wer es ist.","B": "&Es geht nur um eure Vor-\n&urteile gegen Schwule. \n&Homosexualität ist nicht \n&gleich HIV! Ich weiß, wie \n&ich mich schützen kann, \n&macht euch da keine \n&Sorgen.", "C": "&Ich habe auch Angst. Oft \n&denke ich, wenn ich nicht \n&schwul wäre, vielleicht \n&müsste ich mich nicht die- \n&sen Risiken aussetzen, Ich \n&habe Angst, dass ich euch \n&in Schwierigkeiten bringe, \n&und ich weiß nicht, was ich \n&dagegen tun soll.", "D": "&HIV ist nicht ein Problem \n&für eine bestimmte Gruppe \n&von Menschen, sondern \n&ein globales Gesundheits- \n&problem, und jeder kann \n&sich anstecken. Wichtig ist, \n&dass man Infektionen wirk- \n&sam vermeiden kann, wenn \n&man sicherheitsbewusst ist \n&und Vorsichtsmaßnahmen \n&trifft."},
   answer_papa: { "A": "...", "B": "Wir machen uns Sorgen um \ndeine Gesundheit und du \ngibst uns die Schuld! Du \nglaubst, du weißt, wie du \ndich schützen kannst, aber \ndu hast keine Ahnung, wie \ngefährlich die Welt da \ndraußen ist.", "C": "Du hast jetzt Angst? Das \nhättest du dir vor langer \nZeit überlegen müssen! Du \nhättest dich nicht für das \nSchwulsein entschieden, \nwenn du wirklich an uns \ngedacht hättest. Ändere \ndich jetzt sofort! ", "D": "..."  }},
  { text: "Hast du schon darüber \nnachgedacht, was du tun \nwirst, wenn du alt bist? \nMama und Papa haben \ndich bei uns, aber was ist \nmit dir in der Zukunft?",
    options: [' Eure Gesundheit ist das Wichtigste', ' Ich habe noch nicht an die Zukunft gedacht', ' Es ist meine eigene Entscheidung', ' Ich mache schon Pläne für die Zukunft'],
  answer_kid: { "A": "&Mama und Papa, Ich schä- \n&tze eure Sorge um mich. \n&Aber ich hoffe, dass die \n&Tatsache, dass ich schwul \n&bin, eure Emotionen nicht \n&zu sehr beeinflusst. Eure \n&Gesundheit und euer \n&Glück sind das Wichtigste \n&für mich. Macht euch keine \n&Sorgen mehr um meine \n&Zukunft.","B": "&Ich habe auch noch keine  \n&Pläne für meine Zukunft,  \n&und ich weiß nicht, ob ich  \n&eine Familie haben werde  \n&wie alle anderen. Ich habe  \n&auch Angst davor, allein alt  \n&zu werden. Daran möchte  \n&ich jetzt nicht denken.", "C": "&Ich werde mein Leben \n&selbst in die Hand nehmen. \n&Ich kann gut allein leben. \n&Und was ist mit dem Alter? \n&Darum muss ich mich \n&später in Zukunft kümmern, \n&wenn es soweit ist, werde \n&ich alles schaffen.", "D": "&Keine mehr Sorge, Mama \n&und Papa, ich werde mehr \n&gut arbeiten, um meinen \n&Lebensunterhalt zu verdie- \n&nen und für meinen Ruhe- \n&stand zu planen. Ich werde \n&auch gut auf mich aufpa- \n&ssen und mich um meine \n&körperliche und geistige \n&Gesundheit kümmern."},
   answer_papa: { "A": "...","B": "Wenn du im Moment nicht \ndarüber nachdenkst, wirst \ndu erst dann Gedanken \nmachen, wenn wir alle nicht \nmehr da sind? Wenn du \neine Familie gründen willst, \nsuche dir eine normale Frau. \nHeiraten, ein Kinder haben \nund ein normales Leben \nführen.", "C": "Du glaubst, du kannst alles \nselbst erledigen? Am Ende \nbrauchst du immer noch \nHilfen von Mama und mir. \nWenn du nicht heiratest, \nwenn wir nicht mehr da \nsind, stellst du dir vor, dass \ndich jemand anderes so \nunterstützt wie wir.", "D": "..."  }}
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
    var done=setInterval (show,30);
}
function show_part2_text(text) {
    var container = document.getElementById('part2_text');
    var i = 0;
    var currentText = '';
    document.getElementById('part2_text').style.display = 'block';
    document.getElementById('question').style.display = 'none';

    function showNextChar() {
        if (i < text.length) {
            if(text.charAt(i)==="&"){currentText +="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";i++;}
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
            //setTimeout(showNextChar, 50); // 调整速度
        }
        else { // 如果已经显示了所有文本
            clearInterval (done);
            if(currentQuestionIndex===part1Questions.length) {
            setTimeout(nextQuestion, 3000); }  

        }
    }
    var done=setInterval (showNextChar,30);

    //showNextChar();
}
function show_text(question, kid, papa) {
    var fullText = question + kid + papa.charAt(0)+papa; // 组合整个文本
    var num_q = question.length; // question文本的长度
    var num_k = num_q + kid.length; // kid文本结束的位置
    var i = num_q; // 从文本的第一个字符开始
    var currentText = question + '\n\n'; // 当前逐字显示的文本
    var paused = false; // 用于标记是否暂停了循环
    var done;

    function show() {
        if (!paused && i < fullText.length) {
            if (fullText.charAt(i) === "&") {
                currentText += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
                i++;
            } else if (i === num_k) {
                currentText += '\n\n';
                // 暂停并在2秒后继续
                paused = true;
                clearInterval(done); // 停止当前循环
                setTimeout(function() {
                    i++; // 确保在暂停后移动到下一个字符
                    paused = false;
                    done = setInterval(show, 30); // 重新开始循环
                }, 1000);
                return;
            }
            currentText += fullText.charAt(i);
            currentText = currentText.split("\n").slice(-10).join("\n");
            i++; // 移动到下一个字符
        }

        document.getElementById("question").innerHTML = currentText;

        if (i >= fullText.length) { // 如果已经显示了所有文本
            clearInterval(done);
            setTimeout(show_score,1000);
            setTimeout(nextQuestion, 2000);
        }
    }

    done = setInterval(show, 30); // 每30毫秒显示下一个字符
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
        show_part2_text(part2Questions[0].text); 
        document.getElementById('question').style.display = 'none';       
        document.getElementById('part1-answers').style.display = 'none';
    }
    else {
        document.getElementById('score').style.display = 'block';       
        document.getElementById('buttonNextQustion').style.display = 'none';       
        document.getElementById('part2_text').style.display = 'none';
        document.getElementById('question').style.display = 'block';
        question = current_part[currentPartQuestionIndex];

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
        if (question.options[3].split("\n").length>1){
        document.getElementById('buttonD').style.height="60px";}
        else{document.getElementById('buttonD').style.height="42px";}
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
            current_part_color = '#00A351';
            shadow_color_ja='0px 1px 5px 0px rgba(1, 45, 23, 0.25)';
            break;        
        case 5:
            current_part = part5Questions;
            current_part_color = '#770088';
            shadow_color_ja='0px 1px 5px 0px rgba(41, 0, 47, 0.3)';
            break;
        case 6:
            current_part = part6Questions;
            current_part_color = '#FF7400';
            shadow_color_ja='0px 1px 5px 0px rgba(107, 49, 0, 0.3)';
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

