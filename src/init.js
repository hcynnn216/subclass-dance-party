

  
  window.dancers = [];

  $('.lineUp').click(function(event) {
    $(".dancing").stop(true,true);
    $(".topbar").html('<h2 style="text-align:center;color:red;background-color: none">"Party is over!!!!! Refresh to dance again!"</h2>');
    $(".topbar").css("background-color", "yellow")
    $(".dancing").animate({
      "left": "0px"
    }, "fast");
  });



 //905 1323

//($("body").height()/4) * Math.random())+ .53*$("body").height()
  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(

      (($("body").height()/3.3) * Math.random())+ 550,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );



    $('body').append(dancer.$node);
    //
    
   //
    window.dancers.push([dancer, dancer.top, dancer.left]);
    console.log(window.dancers)

    $("img").mouseover(function() {

    //  $(this).css({"border": "10px solid blue"});

      $(this).css({"width": "125px","height":"225px"});
    });

    $("img").mouseleave(function() {

    //  $(this).css({"border": "10px solid blue"});

      $(this).css({"width": "75px","height":"150px"});
    });



$(".dancing").unbind().click(function() {
    
$(this).stop(true,true);
$("h1").delay("slow").fadeIn();
  $("h1").delay("slow").fadeOut();
console.log('current place',$(this).attr('style'))
    var array = $(this).attr('style').split(' ');
    var stringTop = array[1].slice(0, array[1].length - 3);
    var stringLeft = array[3].slice(0, array[3].length - 3);

    console.log("current place",stringTop, stringLeft);

    var index = Math.floor(Math.random() * (window.dancers.length - 1))
    var person = window.dancers[index];

    var left = person[2]
    var top = person[1]

    console.log("place it will go",top, left);


    $(this).animate({
      "left": left + "px",
      "top": top + "px"
    }, "slow")

    $(this).animate({
      "left": stringLeft + "px",
      "top": stringTop + "px"
    }, "slow")

  });










  });


