// On click, hide home page
$( document ).ready(function() {
  $("#jumboSection").show(500);
    $("#aboutSection").hide();
    $("#portfolioSection").hide();
    $("#experienceSection").hide();
    $("#contactSection").hide();
});

$("#hibiLogo").on("click", function(){
  $("#jumboSection").show(500);
    $("#aboutSection").hide(500);
    $("#portfolioSection").hide(500);
    $("#experienceSection").hide(500);
    $("#contactSection").hide(500);
  });

  $("#aboutLink").on("click", function(){
    $("#aboutSection").show(500);
    $("#jumboSection").hide(500);
    $("#portfolioSection").hide(500);
    $("#experienceSection").hide(500);
    $("#contactSection").hide(500);
  });

  $("#portfolioLink").on("click", function(){
    $("#portfolioSection").show(500);
    $("#aboutSection").hide(500);
    $("#jumboSection").hide(500);
    $("#experienceSection").hide(500);
    $("#contactSection").hide(500);
  });
  
    $("#experienceLink").on("click", function(){
      $("#experienceSection").show(500);
      $("#portfolioSection").hide(500);
      $("#aboutSection").hide(500);
      $("#jumboSection").hide(500);
      $("#contactSection").hide(500);
    });
  

    $("#contactLink").on("click", function(){
      $("#contactSection").show(500);
      $("#experienceSection").hide(500);
      $("#portfolioSection").hide(500);
      $("#aboutSection").hide(500);
      $("#jumboSection").hide(500);
    });
  



