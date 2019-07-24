var randomResult;
var wins = 0;
var losses = 0;
var images = ["../images/477295.jpg", "..images/images-1.jpg", "../images/images.jpg", "../images/yellow_gem.jpg"]

randomResult = Math.floor(Math.random() * 101) + 19;
console.log(randomResult);

$(".game-score").html(randomResult);


for(var i = 0; i < 4; i++){
    var random = Math.floor((Math.random() * 11) + 1);
    console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'button',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

    $(".buttons").append(crystal);
}

$(".button").on("click", function () {
    
    console.log(($(this).attr("data-random")));

})

if (random === randomResult) {
    wins++;

}




