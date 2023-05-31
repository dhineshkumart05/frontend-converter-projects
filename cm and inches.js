
        //    Inches to cm converter js program..... 

function cmConvert(){
    let incVal = Number(document.getElementById("input").value)
    let cmVal = incVal*2.54
    let result = document.getElementById("result")
    result.innerHTML = cmVal.toFixed(3)  + " cm" 
}


       // cm to Inches converter js program.... 

function inchesConvert(){
    let cmVal = Number(document.getElementById("input").value)
    let incVal = cmVal/2.54
    let result = document.getElementById("result")
    result.innerHTML = incVal.toFixed(3) + " Inches" 
}