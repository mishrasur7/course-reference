function doTheAnalysis() {
    var outPutText = ""; 
    var input = Number(document.getElementById("input").value); 
    var i = input; 
    while(i > 0){
        if(i % 3 === 0) {
            outPutText = outPutText + i + " , "; 
        }
        i--; 
    } 
    document.getElementById("answer").innerHTML = outPutText;
}