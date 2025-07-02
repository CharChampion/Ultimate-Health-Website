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
