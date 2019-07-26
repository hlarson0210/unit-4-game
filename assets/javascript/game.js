var randomResult;
var wins = 0;
var losses = 0;
var previous = 0;

var resetAndStart = function () {

    randomResult = Math.floor(Math.random() * 101) + 19;
    console.log(randomResult);

    $(".game-score").html(randomResult);
    

    for (var i = 1; i < 5; i++) {
        var random = Math.floor((Math.random() * 11) + 1);
        console.log(random);

        $("#btn" + i.toString()).val(random);
    }
}

resetAndStart();

$(document).on("click", 'button', function () {

    var num = parseInt($(this).attr("value"));
    console.log(num);

    previous += num;

    $("#user-score").html(previous);

    console.log(previous);

    if (previous > randomResult) {

        losses++;

        $("#losses").html("Losses: " + losses);

        previous = 0;
        $("#user-score").html(0);

        resetAndStart();
    }
    else if (previous === randomResult) {

        wins++;

        $("#wins").html("Wins: " + wins);

        previous = 0;
        $("#user-score").html(0);
        
        resetAndStart();
    }
})





