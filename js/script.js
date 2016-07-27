function changeColor() {
  var bgColorArray = ['#EF5326', '#EF8D26', '#1C7795', '#1BA95D', '#C31F75', '#ED262B', '#27C11F', '#9BDE23'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
  $('body').css('backgroundColor', selectBG);
}

var quote = "";

$(document).ready(function() {

  $("#getQuote").on("click", function() {

    $.getJSON("http://api.adviceslip.com/advice", function(json) {

      quote = json.slip.advice;

      $("#quote").html(quote)

    });
    changeColor();
  });

  $('#tweet').on("click", function() {
    if (quote) {

      var tweet = "http://twitter.com/intent/tweet?text=" + quote;
      $('#tweet').attr("href", tweet);

    }

    $("#tweet").attr("target", "");

  });

});