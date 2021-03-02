function doTheAnalysis() {
    var input = Number(document.getElementById("input").value);
    outPutText = ""; 
    
    var i = input; 
    while(i % 10 != 0){
        if(i % 2 === 0) {
            outPutText = outPutText + i + " , "; 
        }
        i--; 
    }
    document.getElementById("answer").innerHTML = outPutText; 
}