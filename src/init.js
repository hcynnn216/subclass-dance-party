$(document).ready(function() {


  window.dancers = [];

  $('.lineUp').unbind().click(function(event) {
    console.log('lineUp')
    $(".dancing").animate({
      "left": "0px"
    }, "slow")


  });

    



  //905 1323

  //($("body").height()/4) * Math.random())+ .53*$("body").height()
  $('.addDancerButton').unbind().click(function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(

      (($("body").height() / 3.3) * Math.random()) + 550,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );



    $('body').append(dancer.$node);


//$(".dancing").unbind().click( function(event) {
//      console.log('number of times called');

  //  });









    //

    //
    window.dancers.push([dancer, dancer.top, dancer.left]);
    //console.log(window.dancers)

    $("img").unbind().mouseover(function() {

      //  $(this).css({"border": "10px solid blue"});

      $(this).css({
        "width": "125px",
        "height": "225px"
      });
    });

    $("img").unbind().mouseleave(function() {

      //  $(this).css({"border": "10px solid blue"});

      $(this).css({
        "width": "75px",
        "height": "150px"
      });
    });



    $(".dancing").unbind().dblclick(function() {
      Math.random() * window.dancers.length - 1;


      console.log('testtt');


      $(this).animate({
        "left": (Math.random() * $("body").width()) + "px"
      }, "fast")

    });






   
    $(".dancing").unbind().click(function() {
      console.log($(this));
  

var array=$(this).attr('style').split(' ');
var stringTop=array[1].slice(0,array[1].length-4);
var stringLeft=array[3].slice(0,array[3].length-4);

console.log(stringTop,stringLeft)

     

    var index = Math.floor(Math.random() * (window.dancers.length - 1))
      var person = window.dancers[index];
      
      var left = person[2]
      var top = person[1]

  console.log(top,left);

     
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
  
});
