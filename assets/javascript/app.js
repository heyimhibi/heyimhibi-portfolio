// On click, hide home page

$("#hibiLogo").on("click", function(){
  $("#jumboSection").show(1000);
    $("#aboutSection").hide(1000);
    $("#portfolioSection").hide(1000);
    $("#experienceSection").hide(1000);
    $("#contactSection").hide(1000);
  });

  
  $("#aboutLink").on("click", function(){
    $("#aboutSection").show(1000);
    $("#jumboSection").hide(1000);
    $("#portfolioSection").hide(1000);
    $("#experienceSection").hide(1000);
    $("#contactSection").hide(1000);
  });


  $("#portfolioLink").on("click", function(){
    $("#portfolioSection").show(1000);
    $("#aboutSection").hide(1000);
    $("#jumboSection").hide(1000);
    $("#experienceSection").hide(1000);
    $("#contactSection").hide(1000);
  });
  
  
    $("#experienceLink").on("click", function(){
      $("#experienceSection").show(1000);
      $("#portfolioSection").hide(1000);
      $("#aboutSection").hide(1000);
      $("#jumboSection").hide(1000);
      $("#contactSection").hide(1000);
    });
  

  
    $("#contactLink").on("click", function(){
      $("#contactSection").show(1000);
      $("#experienceSection").hide(1000);
      $("#portfolioSection").hide(1000);
      $("#aboutSection").hide(1000);
      $("#jumboSection").hide(1000);
    });
  



