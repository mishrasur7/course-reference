

var greeting = "Moi!"
document.getElementById("pOutput").innerHTML = greeting + "<br />"; 

var answer = confirm("Do you want to continue?"); 

while (answer === true) {
    greeting = greeting + " moi !"; 
    document.getElementById("pOutput").innerHTML += greeting + "<br>"; 

    answer = confirm("Do you still want to continue?"); 

}
answer = confirm("Bye!"); 


