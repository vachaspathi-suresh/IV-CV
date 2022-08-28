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
      $("body").addClass("dark");
      localStorage.setItem("current-theme", "dark");
    } else {
      $(".road").attr("src", "res/images/roadM.png");
      $(".sun-moon").attr("src", "res/images/sun.png");
      $("body").removeClass("dark");
      localStorage.setItem("current-theme", "light");
    }
  }, 1700);

  setTimeout(function () {
    $(".sun-moon").removeClass("daytonyt");
  }, 3200);
});

const x = localStorage.getItem("current-theme");
if (!!x) {
  if (x === "dark") {
    $("#title").toggleClass("night");
    if ($("#title").hasClass("night")) {
      $(".road").attr("src", "res/images/roadN.png");
      $(".sun-moon").attr("src", "res/images/moon.png");
      $("body").addClass("dark");
      localStorage.setItem("current-theme", "dark");
    } else {
      $(".road").attr("src", "res/images/roadM.png");
      $(".sun-moon").attr("src", "res/images/sun.png");
      $("body").removeClass("dark");
      localStorage.setItem("current-theme", "light");
    }
  }
} else {
  localStorage.setItem("current-theme", "light");
}
