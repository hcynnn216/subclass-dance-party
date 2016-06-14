$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function(event) {
console.log('lineUp')
    $(".dancing").animate({
      "left": "0px"
    }, "slow")


  })


  $('.getBack').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      var num=window.dancers[i][2]
      console.log(num+ "px");
      $(".dancing").animate({"left": num+ "px"}, "fast")
    }
  });


  $('.addDancerButton').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(

      ($("body").height()) * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );



    $('body').append(dancer.$node);
    window.dancers.push([dancer, dancer.top, dancer.left]);
    console.log(window.dancers)

    $(".dancing").mouseover(function() {

      $(this).css("border", "10px solid blue");
    });
  });
});
