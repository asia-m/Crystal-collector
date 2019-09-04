var targetNumber = 65;
$("#number-to-guess").text(targetNumber);
var counter = 0;

var numberOptions = [9, 12, 4, 11];

for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<images>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "./images");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}
$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);
    if (counter === targetNumber) {
        alert("You win!");
    }
    else if (counter >= targetNumber) {
        alert("You lose!!");
    }
});




