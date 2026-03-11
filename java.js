document.getElementById("Execute").addEventListener("click", function () {

    let sentence = document.getElementById("sentence").value;
    let splittedSentence = sentence.split(" ");
    let words = 0
    let output = ""
    splittedSentence.forEach(element => {
        if(element===";"||element ==="!"|| element==="*"||element ===":" || element ===","){
            words=words

        }
        else if(element.trim() !== ""){
            words ++;
            output += "<u>" + element + "</u> ";

        }
      
    });


    document.getElementById("words").innerHTML = output;
    document.getElementById("sent-count").value = words;
    document.getElementById("count").innerHTML = words;
});
