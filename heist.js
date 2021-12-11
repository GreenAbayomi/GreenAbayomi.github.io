

function startTime() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  } else if (h == 12){
      h = 12;
    ampm = " PM";
  } else if (h < 12){
      ampm = " AM";
  } else {
      ampm = "PM";
  };

if(h==0) {
  h=12;
  ampm = "AM"
}
  
  document.getElementById('display').innerHTML = h+":"+m+ampm;
  var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
  if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



//date
function startDate() {
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("date").innerHTML = days[d.getDay()]+" | "+d.getDate()+ "/" +[d.getMonth()+1]+"/"+d.getFullYear();
}

//quote array
var quotes = ["\"To Love, You Need Courage\" <br/> - Nairobi",
"\"In The End, Love is A Good Reason For Everything To Fall Apart\" <br/> - Tokyo",
 "\"Death Can Be The Greatest Opportunity Of Your Life\" <br/> - Berlin", 
"\"It Takes Much More Courage To Be In Love Than It Does For War\" <br/> - Helsinki", 
"\"Happiness Is Like Lightning, Blink And You Miss It. After That Came The Fall. When You Reach Heaven The Fall Is Devastating\" - <br/> Tokyo ",
"\"Love Can\'t Be Timed. It Has To Be Lived.\" <br/>- Berlin",
"\"In This World, Everything Is Governed By Balance. There\'s What You Stand To Gain And What You Stand To Lose. And When You Think You\'ve Got Nothing To Lose, You Become Overconfident\" <br> - Professor",
"]\"After All, What\'s More Human Than The Fight For Survival\"  <br> - Tokyo"];


function changeBG () {
  var background = ['url("images/heistCrew.jpg")' ,
  'url("images/heistimg2.jpeg")' ,
     ];

var body = document.getElementsByTagName("body");
var bg = background[Math.floor(Math.random() * background.length)];
body.style.backgroundImage = bg;
}
setInterval (changeBG, 2000);


function genQuote() {
  var randNum = Math.floor(Math.random() * 8) ;
  document.getElementById('quote').innerHTML = quotes[randNum];
  
 
  }
  


