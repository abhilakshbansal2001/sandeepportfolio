$(window).on("load",function(){

    $("#welcome").delay(1000).fadeOut(500);


});
function pageRedirect() {
     window.location.replace("index.html");
 }
 setTimeout("pageRedirect()", 1500);
