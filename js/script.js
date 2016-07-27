// function changeColor() {
//   var bgColorArray = ['#EF5326', '#EF8D26', '#1C7795', '#1BA95D', '#C31F75', '#ED262B', '#27C11F', '#9BDE23'],
//     selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
//   $('body').css('backgroundColor', selectBG);
// }

var quote = "";
var character = "";

$(document).ready(function() {

  $("#getQuote").on("click", function() {

     $.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) { 
        console.log(json);
        quote = json.quote;
        character = json.character;
        $('#quote').html(quote + '<br><br>' + character);
    });
    // changeColor();
  });

  $('#tweet').on("click", function() {
    if (quote) {

      var tweet = "http://twitter.com/intent/tweet?text=" + quote;
      $('#tweet').attr("href", tweet);

    }

    $("#tweet").attr("target", "");

  });

});