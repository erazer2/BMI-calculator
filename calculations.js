

let bmiCalc=()=>{
    enteredHeight=document.getElementById("cmHeight").value;
    enteredWeight=document.getElementById("kgWeight").value;

    heightInMeters=enteredHeight/100;
    heightInMetersSquared=heightInMeters*heightInMeters;

    document.getElementById("result").innerHTML=(enteredWeight/heightInMetersSquared).toFixed(2);


}

    