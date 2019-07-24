var randomResult;
var wins = 0;
var losses = 0;
// var images = ["../images/477295.jpg", "../images/images-1.jpg", "../images/images.jpg", "../images/yellow_gem.jpg"];


var resetAndStart = function () {

    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 101) + 19;
    console.log(randomResult);

    $(".game-score").html(randomResult);


    for (var i = 0; i < 4; i++) {
        var random = Math.floor((Math.random() * 11) + 1);
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'button',
            "data-random": random
        });
        // This line of code was to create an array for the images to be put into the above created div for the .crystal
        // crystal.css({
        //     "background-image":"url('" + images[i] + "')",
        //     "background-size":"cover"
        // });

        $(".buttons").append(crystal);
    }
}

resetAndStart();

$(document).on("click", '.crystal', function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;


    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if (previous > random_result) {

        losses++;

        $("#losses").html("Losses: " + losses);

        previous = 0;

        resetAndStart();

    }
    else if (previous === random_result) {

        wins++;

        $("#wins").html("Wins: " + wins);

        previous = 0;

        resetAndStart();

    }
})





