//document.getElementById("corpClicks").innerText = 1;
const maxWidth = window.matchMedia("(max-width: 500px)").matches; //uso: if(maxWidth){o que muda}

var turns = 1;
var corpClicks = 3;
var corpCredits = 5;
var badPubli = 0;

var runnerClicks = 0;
var runnerCredits = 5;
var tags = 0;
var core = 0;

document.getElementById("corpClicks").innerText = corpClicks;
document.getElementById("corpCredits").innerText = corpCredits;
document.getElementById("bp").innerText = "Bad Publicity: " + badPubli;

document.getElementById("runnerClicks").innerText = runnerClicks;
document.getElementById("runnerCredits").innerText = runnerCredits;
document.getElementById("tag").innerText = "Tags: " + tags;
document.getElementById("core").innerText = "Core Damage: " + core;

document.getElementById("turns").innerText = "Turns: " + turns;

//função ao iniciar (pode ser útil)
function onStart(){
    document.getElementById("choosePanel").style.display = "contents";
}

function openChoose(){
    closeSettings();
    document.getElementById("choosePanel").style.display = "contents";
}
function chooseFaction(){
    const corp = document.getElementById("corpFaction");
    switch (corp.value) {
        case "none":
            console.log("None selected (Corp)");
            break;
        case "hb":
            console.log("Haas-Bioroid selected");
            changeBackground("hb.png", true, "#afafaf");
            break;
        case "jinteki":
            console.log("Jinteki selected");
            changeBackground("jinteki.png", true, "#afafaf");
            break;
        case "nbn":
            console.log("NBN selected");
            changeBackground("nbn.png", true, "#afafaf");
            break;
        case "weyland":
            console.log("Weyland Consortium selected");
            changeBackground("weyland.png", true, "#afafaf");
            break;    
    }
    const runner = document.getElementById("runnerFaction");
    switch (runner.value){
        case "none":
            console.log("None selected (Runner)");
            break;
        case "adam":
            console.log("Adam selected");
            changeBackground("adam.png", false, "#afafaf");
            break;
        case "anarch":
            console.log("Anarch selected");
            changeBackground("anarch.png", false, "#afafaf");
            break;
        case "apex":
            console.log("Apex selected");
            changeBackground("apex.png", false, "#afafaf");
            break;
        case "criminal":
            console.log("Criminal selected");
            changeBackground("criminal.png", false, "#afafaf");
            break;
        case "shaper":
            console.log("Shaper selected");
            changeBackground("shaper.png", false, "#afafaf");
            break;
        case "sunny":
            console.log("Sunny Lebeau selected");
            changeBackground("sunny.png", false, "#afafaf");
            break;
    }
    document.getElementById("choosePanel").style.display = "none";
}

function changeBackground(file, side, color){
    //Side: true = Corp, false = Runner
    if(side){
        const corp = document.getElementById("corp");
        corp.style.background = color + " url(backgrounds/" + file + ") right no-repeat";
        corp.style.backgroundSize = "contain";
    } else {
        const runner = document.getElementById("runner");
        runner.style.background = color + " url(backgrounds/" + file + ") right no-repeat";
        runner.style.backgroundSize = "contain";
    }
}

function goFullscreen(){
    document.documentElement.requestFullscreen();
}

//abre configurações
function showSettings(){
    document.getElementById("settingsPanel").style.display = "contents";
}

function closeSettings(){
    document.getElementById("settingsPanel").style.display = "none";
}

//--------------------------------------------------------

//+1 clique da corp
function addClickC(){
    corpClicks++;
    document.getElementById("corpClicks").innerText = corpClicks;
}

//-1 clique da corp
function removeClickC(){
    if(corpClicks != 0){
        corpClicks--;
        document.getElementById("corpClicks").innerText = corpClicks;
    } else {
        alert("The corp doesn't have any clicks.");
    }
}

//+1 crédito da corp
function addCreditC(){
    corpCredits++;
    document.getElementById("corpCredits").innerText = corpCredits;
}

//-1 crédito da corp
function removeCreditC(){
    if(corpCredits != 0){
        corpCredits--;
        document.getElementById("corpCredits").innerText = corpCredits;
    } else {
        alert("The corp doesn't have any credits.");
    }
}

//+1 bad publicity
function badpubA(){
    badPubli++;
    document.getElementById("bp").innerText = "Bad Publicity: " + badPubli;
}

//-1 bad publicity
function badpubR(){
    if(badPubli != 0){
        badPubli--;
        document.getElementById("bp").innerText = "Bad Publicity: " + badPubli;
    } else {
        alert("The corp doesn't have any bad publicity! (Bad Publicity can't be less than 0, since it's a counter)");
    }
}

//mesma coisa
function addClickR(){
    runnerClicks++;
    document.getElementById("runnerClicks").innerText = runnerClicks;
}

function removeClickR(){
    if(runnerClicks != 0){
        runnerClicks--;
        document.getElementById("runnerClicks").innerText = runnerClicks;
    } else {
        alert("The runner doesn't have any clicks.");
    }
}

function addCreditR(){
    runnerCredits++;
    document.getElementById("runnerCredits").innerText = runnerCredits;
}

function removeCreditR(){
    if(runnerCredits != 0){
        runnerCredits--;
        document.getElementById("runnerCredits").innerText = runnerCredits;
    } else {
        alert("The runner doesn't have any credits.");
    }
}

//+1 tag
function tagA(){
    tags++;
    document.getElementById("tag").innerText = "Tags: " + tags;
}

//-1 tag
function tagR(){
    if(tags != 0){
        tags--;
        document.getElementById("tag").innerText = "Tags: " + tags;
    } else {
        alert("The runner doesn't have any tags.");
    }
}

//+1 dano de core
function coreA(){
    core++;
    document.getElementById("core").innerText = "Core Damage: " + core;
}

//-1 dano de core
function coreR(){
    if(core != 0){
        core--;
        document.getElementById("core").innerText = "Core Damage: " + core;
    } else {
        alert("The runner hasn't taken any core damage yet.");
    }
}

//passar o turno e fazer o reset menor
function pass(){
    var passed = false;

    if(turns % 2 == 0){
        if(runnerClicks == 0){
            passed = true;
        }
    } else {
        if(corpClicks == 0){
            passed = true;
        }
    }

    if(!passed){
        if(turns % 2 == 0){
            alert("The runner hasn't used their clicks yet!");    
        } else {
            alert("The corp hasn't used their clicks yet!");
        }
    } else {
        turns++;
        document.getElementById("turns").innerText = "Turns: " + turns;
        if(turns % 2 == 0){
            document.getElementById("runnerTitle").innerText = "Runner's Turn";
            document.getElementById("corpTitle").innerText = "Corp";
            runnerClicks = 4;
        } else {
            document.getElementById("corpTitle").innerText = "Corp's Turn";
            document.getElementById("runnerTitle").innerText = "Runner";
            corpClicks = 3;
        }
        document.getElementById("corpClicks").innerText = corpClicks;
        document.getElementById("runnerClicks").innerText = runnerClicks;
    }
}

//refazer a partida, precisa de confirmação (usar confirm())
function reset(){
    if(confirm("Are you sure? (this will reset the current state of the game)")){
        location.reload();
    }
}