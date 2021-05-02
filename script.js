var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
	var r_size = Math.floor(Math.random() * 65) + 10;
	var r_left = Math.floor(Math.random() * 100) + 1;
	var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  
},500);

var i = 0;
var txt1 = "Hiii Junnu.....!  <<               I want to say something to you. <<<                So , Please read everything carefully...!                                                                           > I just want to make myself clear to you < nitho direct ga matladali ankunna but veelu avatam ledhu  <<                  ninnu ide adagali ankunna, nuv inkokarni love chesa nanni abadham cheppav ga... < idi nijamo kadho nuvve cheppali kalisinapudu, nenaithe matram adi abadhamane anukuntunna... <<<                           Nuv nannu love chesina lekhapoyna emi ankonu nenu matram ninnu eppudu love chestanu...                                                      > ninnu teliyaka decision cheppamani adigi ibandii petta last year I'm sorry...                      << Nikosam enni rojulayna wait chesta...repeat chestunna ankunna parle nuv happy ga unte chalu manaki...I mean naku...!                                                     > Ninnu malli adigithe ekkada malli matladatam manestavo anii adagaledhu...                    <<< cheppali ankunnavi ani cheppaledhu but eppatikayna nitho direct ga chepta appudu decision ne istam...ninnu eppudu love cheyamani force cheyanu...                                                             >I Love U <Junnu forever.....and ever! |                  <<<< Give me One chance to Prove my Love ...!<epati varaku teliyaka emanaa ibandi petti unte sorry";
var speed = 80;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {        
     if(txt1.charAt(i)=='<')
      document.getElementById("text1").innerHTML += '</br>'
    else if(txt1.charAt(i)=='>')
      document.getElementById("text1").innerHTML = ''
    else if(txt1.charAt(i)=='|')
      {
        $(".bg_heart").css("background-image","url('https://wallpapercave.com/wp/wp7270110.jpg')");

      }
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}