const rules = [
    {titel:"Spielhintergrund",rule:"Die Spieler spielen einen\n transparenten Regenbogen.\n    Der Weg des Coming-outs\n von Schwulen ist wie ein\n transparenter Regenbogen \n    auf der Suche nach seinen\n Farben."},
    {titel:"Spielverlauf",rule:"Erste Runde, Ausdruck der\n Selbstidentität. In jeder fol-\n genden Spielrunde müssen \ndie Spieler einen Dialog mit \nden Eltern führen, um mit \n    den verschiedenen Emo-\n    tionen und Fragen umzuge-\nhen, die die Eltern in jeder\n Runde haben könnten."},
    {titel:"Runde und Belohnungen",rule:"Die Spieler erhalten eine be-\n stimmte Farbe des Regen-\n bogens für jede erfolgreiche\n Dialogrunde mit den Eltern."},
    {titel:"Die Siegbedingungen",rule:"Die Spieler sammeln in allen\n Runden alle Farben des Re-\n genbogens und erhalten im \nSpiel das Verständnis und \ndie Zustimmung der Eltern."}
    ]
let i = 0;
function display_rule(){
    document.getElementById("titel").style.display = "none";
    document.getElementById("arrows").style.display = "block";
    document.getElementById("buttons").style.display = "block";
    document.getElementById("rules").style.display = "block";
    document.getElementById("rules").innerHTML = "<span style='font-family: AvenirH;'>"+rules[i].titel+"</span><br><span style='font-family: Avenir;'>"+rules[i].rule+"</span>";

    };

setTimeout(display_rule, 2000);

function next_rule(){
    if(i==3){
    window.location.href = 'index.html';}
    i++;
    display_rule();

}

function previous_rule(){
    if(i==0){
        window.location.href = 'start_page.html';}
    i--;
    display_rule();

}