var n1=-1;var n2=-1;
$("img").click(function(){
  var num = Math.floor(Math.random() * 6) + 1; 
  var DiceImage = "images/dice" + num + ".png";
  $(this).attr("src", DiceImage);
  if($(this).hasClass("p1")){
    $(".para1").text("Player 1 got "+num);
    n1=num;
  }
  else{
    $(".para2").text("Player 2 got "+num);
    n2=num;
  }
  if(n1!=-1 && n2!=-1){
    if(n1>n2)
        $("h1").html("Player 1 Wins. <br> Play again!!");
    else if(n1<n2)
        $("h1").html("Player 2 Wins. <br> Play again!!");
    else
        $("h1").html("It's a Draw. <br> Play again!!");
  n1=-1;n2=-1;
  }  
});

