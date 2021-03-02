function doTheAnalysis() {
    var input = document.getElementById("input").value; 
    if(input.trim() === "" || isNaN(input)) {
        alert("Please enter a number"); 
    }
}