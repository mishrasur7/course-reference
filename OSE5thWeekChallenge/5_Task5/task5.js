function doTheAnalysis() {
    var input = Number(document.getElementById("input").value); 
    var notPrimeNumber = false; 
    var outPutText = ""; 

    if(input < 2) {
        notPrimeNumber = true; 
    }

    var i = 2; 
    while(notPrimeNumber === false &&  i < input && input != 0) {
        if(input % i === 0) {
            notPrimeNumber = true; 
        }
        i++; 
    }
    if(notPrimeNumber === true) {
        outPutText = "This is not a Prime Number. "; 
    } else {
        outPutText = "This is a Prime Number. "; 
    }

    document.getElementById("answer").innerHTML = outPutText; 

}