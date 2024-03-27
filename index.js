var num1 = Math.floor((Math.random()*6))+1;
var src1 = "./images/dice"+num1+".png";
var num2 = Math.floor((Math.random()*6))+1;
var src2 = "./images/dice"+num2+".png";
document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);
if (num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (num2 > num1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}