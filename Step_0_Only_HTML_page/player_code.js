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
//This solution is now working..tested multiple times! 
// ----------------------------------------------------------------------------
function playerSearch() {
    var nameInput = document.getElementById("text").value;
    var name = names.includes(nameInput); 
    var scoreIndex = names.indexOf(nameInput); 
        if(name === true) {
            document.getElementById("pOutput2").innerHTML = nameInput + "'s " + "score is " + scores[scoreIndex] + "."; 
        }
        else {
            alert("We are sorry! we did not find this player in the list."); 
            document.getElementById("pOutput2").innerHTML = ""; 
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
//Solving it without using ready-made functions 
var player = []; 
var scores = [];
var i = 0; 
//------------------------------------------------------------------------------------------------
function addPlayer() {
    var name = document.getElementById("txtName").value; 
    var score = Number(document.getElementById("txtScore").value);
    if (name === "" || score === "") {
        alert("Please enter name and score."); 
    } 
    else {
        player.push(name); 
        scores.push(score); 
        document.getElementById("txtName").value = ""; 
        document.getElementById("txtScore").value = "";
    }
   
}

//------------------------------------------------------------------------------------------------
function listPlayer() {
    var outPutText = ""; 
    for(var i = 0; i < player.length; i++) {
        outPutText += player[i] + "'s score is " + scores[i] + "<br />"; 
    }
    document.getElementById("pOutput").innerHTML = outPutText; 
}
//This is not ready yet but still working on it. ------------------------------------------------------------------------------------------------
function playerSearch() {
    var nameInput = document.getElementById("text").value; 
    var outPutText; 
    for(var i = 0; i < player.length; i++) {
        if(nameInput === player[i]) {
            outPutText = nameInput + "'s score is " + scores[i]; 
        }
        else {
            outPutText = "Sorry we did not find this player!"; 
        }
    }
    document.getElementById("pOutput2").innerHTML = outPutText; 
}
//------------------------------------------------------------------------------------------------
function findWinner() {
    if(scores.length >= 1) {
        var maxSoFar = scores[0]; 
        for(var i = 1; i < scores.length; i++) {
            if(maxSoFar < scores[i]) {
                maxSoFar = scores[i]; 
            }
        }
        var winner = "The winners are: "; 
        for(var i = 0; i < scores.length; i++) {
            if(maxSoFar === scores[i]) {
                winner += player[i] + scores[i] + " points, "; 
            }
        }
        document.getElementById("pOutput3").innerHTML = winner; 
    } else {
        document.getElementById("pOutput3").innerHTML = "Error! Empty array."; 
    }
}

