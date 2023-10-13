function open_panel() {
    document.getElementById("sidepanel").style.display = "block";
}
function close_panel() {
    document.getElementById("sidepanel").style.display = "none";
}

function open_sport() {
    document.getElementById("sport-event").style.display = "flex";
    document.getElementById("close-add").style.display = " block";
    document.getElementById("open-add").style.display ="none";

}
function close_sport() {
    document.getElementById("sport-event").style.display = "none";
    document.getElementById("open-add").style.display = "block"; 
    document.getElementById("close-add").style.display = " none";

}