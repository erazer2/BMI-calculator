

let bmiCalc=()=>{
    enteredHeight=document.getElementById("cmHeight").value;
    enteredWeight=document.getElementById("kgWeight").value;

    document.getElementById("result").innerHTML=(enteredWeight/((enteredHeight/100)^2)).toFixed(2);


}

    