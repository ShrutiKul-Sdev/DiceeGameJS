var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var img1 = document.querySelectorAll("img")[0];
img1.src = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var img2 = document.querySelectorAll("img")[1];
img2.src = "images/dice"+randomNumber2+".png";;

var h1 = document.querySelector('h1');
if(randomNumber1 > randomNumber2){
    
    h1.innerHTML="Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    
    h1.innerHTML="Player 2 Wins";
}else{
    h1.innerHTML="Draw";
}