var countt=0,countw=0,countl=0;
function operate(b){
if(countl+countw+countt>9){
     if(countw>countl){
        alert(person + " You Win");
        window.location.reload();
     }
     else if(countw<countl){
        alert(person + " You Loss");
        window.location.reload();
     }
     else{
        alert(person + ' Draw Game');
        window.location.reload();
     }
}
else{ 
 l=["&#9994;","&#9995;","&#9996;"]
 var a = Math.floor(Math.random() * 3);
 console.log(b,a);
if(b==0){  
    document.getElementById('you').innerHTML="YOU"+"&#9994;"
    document.getElementById('computer').innerHTML="COMPUTER"+l[a];
    if(a==0){
        document.getElementById("demo").innerHTML="Draw";
        countt = countt + 1;
      
    }
    else if(a==1){
    document.getElementById("demo").innerHTML="Loss";
    countl = countl +1;
    }
    else{
        document.getElementById("demo").innerHTML="Win";
        countw = countw + 1;
    }
}
if(b==1){
    document.getElementById('you').innerHTML="YOU"+"&#9995;"
    document.getElementById('computer').innerHTML="COMPUTER"+l[a];
    if(a==0){
        document.getElementById("demo").innerHTML="Win";
        countw = countw + 1; 
    }
    else if(a==1){
        document.getElementById("demo").innerHTML="Draw";
        countt = countt + 1;
    }
    else{
        document.getElementById("demo").innerHTML="Loss";
        countl = countl +1;
    }
}
if(b==2){
    document.getElementById('you').innerHTML="YOU"+"&#9996;"
    document.getElementById('computer').innerHTML="COMPUTER"+l[a];
    if(a==0){
        document.getElementById("demo").innerHTML="Loss";
        countl = countl +1;
    }
    else if(a==1){
        document.getElementById("demo").innerHTML="Win";
        countw = countw + 1; 
    }
    else{
        document.getElementById("demo").innerHTML="Draw";
        countt = countt + 1;
    }
}
document.getElementById('countw').innerHTML=countw;
document.getElementById('countl').innerHTML=countl;
document.getElementById('countt').innerHTML=countt;
}
}
function stone(){
   var b = 0;
   operate(b);
}

function paper(){
    var b = 1;
   operate(b);
}

function sesor(){
    var b = 2;
    operate(b);
}
var person="Player1";

function myFunction() {
    let text;
    person = prompt("Please enter your name:", "Player1");
    if (person == null || person == "") {
      text = "User cancelled the game";
      window.opener = self;
      window.close();
    } else {
      text = "Hello " + person + " You will get 10 attempts";
    }
    alert(text);
  }
  