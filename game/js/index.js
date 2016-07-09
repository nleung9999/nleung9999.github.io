$(document).ready(function() {
  $('#train').hide();
  $('#Gold Prime').hide();
  $('#enemy1').hide();
  $('#enemy2').hide();
  $('#enemy3').hide();
  $('#enemy4').hide();
  $('#enemy5').hide();
  $('#GoldPrime').hide();
  $('#Button2').hide();
  $('#Button3').hide();
  $('#GoldRed').hide();
  $('#Scorebox').hide();
  $('#Miniguysbox').hide();
  $('#comicbutton').hide();
  $('#energybutton').hide();
  $('#birdcomic').hide();
  $('#comicbuttonbox').hide();
  $('#Reset').hide();

  //Make Gold Red

  function moveRedRight() {
 $("#GoldRed").animate({left: "+=600"}, 2000, moveRedLeft);}
  
 function moveRedLeft() { 
 $("#GoldRed").animate({left: "-=600"}, 2000, moveRedRight);  
 }
  moveRedRight();
 
   //Move Prime 
  function movePrimeRight() {
 $("#GoldPrime").animate({left: "+=600"}, 2000, movePrimeLeft);}
  
 function movePrimeLeft() { 
 $("#GoldPrime").animate({left: "-=600"}, 2000, movePrimeRight);  
 }
  movePrimeRight();  
  
   //Move Miniguys 
  function moveMiniRight() {
 $("#Miniguysbox").animate({left: "+=750"}, 2000, moveMiniLeft);}
  
 function moveMiniLeft() { 
 $("#Miniguysbox").animate({left: "-=750"}, 2000, moveMiniRight);  
 }
  moveMiniRight();   
  
  //Score 
 var score=10;
 
  //Play button click
$('#Play').click(function() { 
  alert("Welcome To Angry Bird Transformers 2!");
  alert("Red Neads your help!");
  alert("Click the three buttons to see what happens!");
  $('h1').hide();
  $('#banana').hide();
  $('a').hide();
  $('#Play').hide();
  $('body').css({'background-image': 'url(http://rollabear.com/img/bg/Rollabear_960_BG_04.png)'});
  $('#train').show();
  $('#Button2').show();
  $('#comicbutton').show();
  $('#energybutton').show();
  $('#GoldRed').show();
  $('#enemy1').show();
  $('#enemy2').show();
  $('#enemy3').show();
  $('#enemy4').show();
  $('#enemy5').show();
  $('#Red9').hide();
  $('#Scorebox').show();
  $('#comicbuttonbox').show();
  $('#Reset').show();
});
  
//Switch Gold Red and Gold Prime buttons
  $('#Button2').click(function() {
    $('#GoldRed').hide();
    $('#GoldPrime').show();
    $('#Button3').show();
    $('#Button2').hide();
   });
  
  $('#Button3').click(function() {
    $('#GoldPrime').hide();
    $('#GoldRed').show();
    $('#Button2').show();
    $('#Button3').hide(); 
  });
  
  
 //Enemy explosions
 $('#enemy1').click(function() {
   $('#enemy1').toggle("explode");
   score = score + 20;
   document.getElementById("points").innerHTML = score;
   $('#enemy1').show(15000);
}); 
  
  $('#enemy2').click(function() {
   $('#enemy2').toggle("explode");
   score = score + 15;
   document.getElementById("points").innerHTML = score;
   $('#enemy2').show(15000);
});

$('#enemy3').click(function() {
   $('#enemy3').toggle("explode");
   score = score + 50;
   document.getElementById("points").innerHTML = score;
   $('#enemy3').show(15000);
});
  
  $('#enemy4').click(function() {
   $('#enemy4').toggle("explode");
    score = score + 43;
   document.getElementById("points").innerHTML = score;
   $('#enemy4').show(10000);
});
  
  
  $('#enemy5').click(function() {
   $('#enemy5').toggle("explode");
    score = score + 37;
   document.getElementById("points").innerHTML = score;
   $('#enemy5').show(14000);
});

  
  $('#comicbutton').click(function() {
    $('#birdcomic').toggle();
   
   });
  
 $('#energybutton').click(function() {
    $('#Miniguysbox').toggle();
    $('#Miniguysbox').toggleClass('moveMiniGuys');
 
 });
  
  function reset () {
    score = 10;
    document.getElementById("points").innerHTML = score;
  }
  
   $('#Reset').click(function() {
    reset();
 
 });
  
});