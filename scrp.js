/******** Nav Bar Function ***********/
$(".navico").on("click", function () {
  $(".sidenav").toggleClass("navcont");
});

$(".ma").on("click", function () {
  if ($(".sidenav").hasClass("navcont")) $(".sidenav").removeClass("navcont");
});

/********* Theme Change Function **********/
$(".sun-moon").on("click", function () {
  $(".sun-moon").removeClass("daytonyt");
  $(".sun-moon").addClass("daytonyt");
  setTimeout(function () {
    $("#title").toggleClass("night");
    if ($("#title").hasClass("night")) {
      $(".road").attr("src", "res/images/roadN.png");
      $(".sun-moon").attr("src", "res/images/moon.png");
    } else {
      $(".road").attr("src", "res/images/roadM.png");
      $(".sun-moon").attr("src", "res/images/sun.png");
    }
  }, 1700);

  setTimeout(function () {
    $(".sun-moon").removeClass("daytonyt");
  }, 3200);
});

$("#send-mail-btn").click(function () {
  $("#contact-form").attr(
    "action",
    "mailto:ivsuresh03@gmail.com?subject=" +
      $("#message-subject").val() +
      "&body=" +
      $("#message-text").val()
  );
  $("#fr1").submit();
});
