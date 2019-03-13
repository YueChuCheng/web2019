$(document).ready(function () {
    $(".showBig").hide();
    $(".button1_main").css("display", "none");
    $(".showBig .closeBtn").click(function(event){
    $(".showBig").fadeOut();
    });

   $(".button1").click(function (event) { 
       $(".main").fadeOut();
       $(".button1_main").fadeIn();
       
   });
   $("#readmore1").click(function (event) { 
       
    $(".showBig").fadeIn();
    $(".closeBtn").fadeIn(); 
    $(".head").fadeOut();
    $(".footer").fadeOut();
    $(".button1_main").fadeOut();
    $(".showbig_pic").css("background-image",'url("../image/refugee1.jpg")');   
   });
   $(".error").click(function (event) { 
    $(".showBig").fadeOut();
    $(".closeBtn").fadeOut(); 
    $(".head").fadeIn();
    $(".footer").fadeIn();
    $(".button1_main").fadeIn();   
   });

   $("#readmore2").click(function (event) { 
       
    $(".showBig").fadeIn();
    $(".closeBtn").fadeIn(); 
    $(".head").fadeOut();
    $(".footer").fadeOut();
    $(".button1_main").fadeOut();
    $(".showbig_pic").css("background-image",'url("../image/Trump1.jpg")');
    $(".showbig_main_content_title").html("Donald Trump");
   });
   $(".error").click(function (event) { 
    $(".showBig").fadeOut();
    $(".closeBtn").fadeOut(); 
    $(".head").fadeIn();
    $(".footer").fadeIn();
    $(".button1_main").fadeIn();   
   });
   $("#readmore3").click(function (event) { 
       
    $(".showBig").fadeIn();
    $(".closeBtn").fadeIn(); 
    $(".head").fadeOut();
    $(".footer").fadeOut();
    $(".button1_main").fadeOut();
    $(".showbig_pic").css("background-image",'url("../image/trade war.jpg")');
    $(".showbig_main_content_title").html("Trade War");      
   });
   $(".error").click(function (event) { 
    $(".showBig").fadeOut();
    $(".closeBtn").fadeOut(); 
    $(".head").fadeIn();
    $(".footer").fadeIn();
    $(".button1_main").fadeIn();   
   });

   $("#readmore4").click(function (event) { 
       
    $(".showBig").fadeIn();
    $(".closeBtn").fadeIn(); 
    $(".head").fadeOut();
    $(".footer").fadeOut();
    $(".button1_main").fadeOut(); 
    $(".showbig_pic").css("background-image",'url("../image/nsKorea.jpg")');
    $(".showbig_main_content_title").html("Korea War");  
   });
   $(".error").click(function (event) { 
    $(".showBig").fadeOut();
    $(".closeBtn").fadeOut(); 
    $(".head").fadeIn();
    $(".footer").fadeIn();
    $(".button1_main").fadeIn();   
   });
   $("#readmore5").click(function (event) { 
       
    $(".showBig").fadeIn();
    $(".closeBtn").fadeIn(); 
    $(".head").fadeOut();
    $(".footer").fadeOut();
    $(".button1_main").fadeOut(); 
    $(".showbig_pic").css("background-image",'url("../image/train.jpg")'); 
    $(".showbig_main_content_title").html(" Taiwan train crash");   
   
   });
   $(".error").click(function (event) { 
    $(".showBig").fadeOut();
    $(".closeBtn").fadeOut(); 
    $(".head").fadeIn();
    $(".footer").fadeIn();
    $(".button1_main").fadeIn();   
   });

});