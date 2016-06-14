$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function(event) {
console.log('lineUp')
    $(".dancing").animate({
      "left": "0px"
    }, "slow")


  })


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



 $(".dancing").click(function() {
console.log('testtt');

      
   $(this).animate({"left": (Math.random()*$("body").width())+ "px"}, "fast")
      
    });










  });
});
