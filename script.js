function Good_Website(){
    document.getElementById("feedback").innerHTML=("Thanks for your feedback!");
}

function Okay_Website(){
    document.getElementById("feedback").innerHTML=("Thank you for your feedback; we will try to improve your experience soon!");
}

function Bad_Website(){
    document.getElementById("feedback").innerHTML=("Sorry for your experience! We will try to improve your experience in the future.");
}

function BMI_Calculator(){
    var age1 = document.getElementById("age1").value;
    var height1 = document.getElementById("height1").value;
    var weight1 = document.getElementById("weight1").value;
    var BMI = (weight1)/((height1)*(height1));
    console.log(BMI)
    document.getElementById("BMI").innerHTML=("Your BMI is " + BMI + ".");
    if (BMI<18.5){
        document.getElementById("warning").innerHTML=("Unfortunately, you are underweight, with a BMI below 18.5.");
    }
    if (18.5<=BMI<=24.9){
        document.getElementById("warning").innerHTML=("You are at a healthy weight, with a BMI between 18.5 and 24.9.");
    }
    if (25<=BMI<=29.9){
        document.getElementById("warning").innerHTML=("Unfortunately, you are overweight, with a BMI between 25 and 29.9.");
    }
    if (BMI>=30){
        document.getElementById("warning").innerHTML=("Unfortunately, you are obese, with a BMI above 30.");
    }
}

function BPM_Calculator(){
    var beats = document.getElementById("beats").value;
    var heartbeats = (beats)*("6");
    document.getElementById("BPM").innerHTML=("Your BPM is " + heartbeats + ".");
}

const Faces=['⚀','⚁','⚂','⚃','⚄','⚅'];

function Roll(){
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");


dice1.style.transform="rotate(360deg)";
dice2.style.transform="rotate(360deg)";
setTimeout(()=>{
    const rol1 = Math.floor(Math.random()*6);
    const rol2 = Math.floor(Math.random()*6)
    dice1.textContent = Faces[rol1];
    dice2.textContent = Faces[rol2];

    dice1.style.transform = "rotate(0deg)";
    dice2.style.transform = "rotate(0deg)";
},400);
}

function Exercises1(){
    var first_dice = document.getElementById("1num").value;
    var second_dice = document.getElementById("2num").value;
    var answer1 = (first_dice)*10;
    var answer2 = (second_dice)*10;
    document.getElementById("exercises1").innerHTML=("You have to do " + answer1 + " of Exercise Number #, which is the number you got on your first dice.");
    document.getElementById("exercises2").innerHTML=("You have to do " + answer2 + " of Exercise Number #, which is the number you got on your second dice.");
}
