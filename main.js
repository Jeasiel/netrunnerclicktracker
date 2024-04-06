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

}

function chooseFaction(){

}

function toggleFullscreen(){
    document.documentElement.requestFullscreen();
}

//abre configurações
function showSettings(){
    document.getElementById("panel").style.display = "contents";
}

function closeSettings(){
    document.getElementById("panel").style.display = "none";
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