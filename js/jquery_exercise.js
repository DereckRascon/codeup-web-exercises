"use strict";

// Code below is for the ID selector portion of the exercise
$(function(){
    let title = $("#main-title").html();
    let header = $("#intro-heading").html();
    alert(title);
    alert(header)
//or you can also write it as follows - alert($("#main-title").html());
})


//
//Code below is for the class selector portion of the exercise
$(function(){
    $(".code-up").css("border", "1px solid red");
})
//
// //Code below is for the element selector portion of the exercise
$(function(){
    $("li").css("font-size", "20px");
    $("h1, p, li").css("background-color", "yellow");
    alert($("h1").html());
})
