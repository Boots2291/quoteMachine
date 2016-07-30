// function changeColor() {
//   var bgColorArray = ['#EF5326', '#EF8D26', '#1C7795', '#1BA95D', '#C31F75', '#ED262B', '#27C11F', '#9BDE23'],
//     selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
//   $('body').css('backgroundColor', selectBG);
// }
var quote = "";
var character = "";


function changeColor() {
  switch (character) {
    case "Tyrion":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Cersei Lannister":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Bran":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Sansa":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Daenerys":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Samwell":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Cersei and Tyrion":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Jaime Lannister":
      $('body').css('backgroundColor', 'yellow');
      break;
    case "Jon Snow":
      $('body').css('backgroundColor', 'yellow');
      break;
    default:
      $('body').css('backgroundColor', 'black');
  }
}

function quoteGenerate(json) {
    $.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) {
        // console.log(json);
        quote = json.quote;
        character = json.character;

        if (character === "Tyrion" || character === "Sansa" || character === "Cersei Lannister" || character === "Bran" || character === "Daenerys" || character === "Samwell" || character === "Cersei and Tyrion" || character === "Jaime Lannister" || character === "Jon Snow") {
            if (quote.length < 140) {
                $('#quote').html(quote + '<br><br>' + character);
                changeColor();
            } else {
                quoteGenerate();
            }
        } else {
            quoteGenerate();
        }
    });
};

$(document).ready(function() {
    quoteGenerate();
    $("#getQuote").on("click", quoteGenerate); //{
    $('#tweet').on("click", function() {
        if (quote) {
            var tweet = "http://twitter.com/intent/tweet?text=" + quote;
            $('#tweet').attr("href", tweet);
        }
        $("#tweet").attr("target", "");
    });
});