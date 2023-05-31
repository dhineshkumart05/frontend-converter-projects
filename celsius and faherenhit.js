
    //  Faherenhit to celsius converter js program 

function celsiusConvert(){
    let farVal = Number(document.getElementById("input").value)
    let celVal = ((farVal-32)*5)/9
    let result = document.getElementById("result")
    result.innerHTML = celVal.toFixed(3) + " " + "celsius"
}



      // Celsius to Faherenhit converter js program

function faherenhitConvert(){
    let celVal = Number(document.getElementById("input").value)
    let farVal = ((celVal*9)/5)+32
    let result = document.getElementById("result")
    result.innerHTML = farVal.toFixed(3) + " " + "Faherenhit"
}