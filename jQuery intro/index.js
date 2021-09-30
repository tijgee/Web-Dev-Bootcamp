//on click manipulation
$("h1").click(function(){
    $("h1").css("color", "purple");
});

//manipulate text
$("h1").html("Bye");

//manipulate style
$("h1").css("font-size", "5rem");

//add class
$("h1").addClass("cool");

//attributes
console.log($("h1").attr("style"));
$("h2").attr("style", "font-size: 5rem");

//eventlisterner keypress
$("input").keypress(function(event) {
    console.log(event.key);
    // change h1 to text   
    //$("h1").text(event.key);
});

//mouseover
$("h1").on("mouseover", function() {
    $("h1").html("You hovered over me!");
})

//before and after   prepend and append
$("h1").before("<button>Sup</button>");



//animation
$("button").on("click", function() {
    $("h1").fadeToggle();
    $("h2").animate({opacity: 0.5});
});