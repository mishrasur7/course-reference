var names = [];
var scores = [];
var i = 0; 
// ----------------------------------------------------------------------------
function addPlayer() {
var name = document.getElementById("txtName").value; 
var score = Number(document.getElementById("txtScore").value); 
    if(name === "" || score === "") {
       alert("Please enter player name and score"); 
    }
    else {
        names.push(name); 
        scores.push(score); 
        document.getElementById("txtName").value = ""; 
        document.getElementById("txtScore").value = ""; 
    }
}
// ----------------------------------------------------------------------------
function listPlayer() {
    for(i = 0; i < names.length; i++) {
        document.getElementById("pOutput").innerHTML += names[i] + "'s " + "score is " + scores[i] + "." + "<br />"; 
    }
}
//This solution is sometimes working and sometimes not working but I will try to figure it out. 
// ----------------------------------------------------------------------------
function playerSearch() {
    var nameInput = document.getElementById("text").value;
    var name = names.includes(nameInput); 

    for(var i = 0; i < names.length; i++) {
        if(name === true) {
            document.getElementById("pOutput2").innerHTML = nameInput + "'s " + "score is " + scores[i] + "."; 
        }
        else {
            alert("We are sorry! we did not find this player in the list."); 
            document.getElementById("pOutput2").innerHTML = ""; 
        }
    }

}
// ----------------------------------------------------------------------------
function findWinner() {
    var max = Math.max(...scores); 
    var winnerIndex = scores.indexOf(max); 
    document.getElementById("pOutput3").innerHTML = "The winner is " + names[winnerIndex]; 
}


// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

