$(function() {
    // alert( 'The DOM has finished loading!' );
    // alert($("#intro-heading").html());
    let listItems = $(".list-item");
    let paragraphs = $("p");
    $("#intro-heading").css("color", "orangered");
    console.log(document.getElementsByClassName("list-item"));
    console.log(listItems);
    listItems.css("color", "blue");
    alert(paragraphs.html());
    paragraphs.html("Man that was a lot of nothing.");

    $(".list-item, #intro-heading").css("text-decoration", "underline");
    $("*").css("border", "1px dashed rebeccapurple");
});