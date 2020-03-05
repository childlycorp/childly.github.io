$(function() {
  "use strict";

  //===== Sticky

  $(window).on("scroll", function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar-toggler").addClass("pointer-none");
      $(".sub-menu-bar").addClass("display-none");
      $(".navbar .navbar-brand img").attr(
        "src",
        "assets/images/childly_logo.svg"
      );
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar-toggler").removeClass("pointer-none");
      $(".sub-menu-bar").removeClass("display-none");
      $(".navbar .navbar-brand img").attr(
        "src",
        "assets/images/childly_logo.svg"
      );
    }
  });

  //===== Section Menu Active
  var scrollLink = $(".page-scroll");

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var tag = this.hash.replace("#", "");
      var sectionOffset = document.querySelector(`.${tag}`).offsetTop - 40;
      if (sectionOffset < scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function(e) {
    $(".navbar-collapse").removeClass("show");
    e.preventDefault();
    var tag = this.hash.replace("#", "");
    var topOffset = 65;
    var elPos = document.querySelector(`.${tag}`).offsetTop;

    window.scrollTo(0, elPos - topOffset);
  });

  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function() {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Back to top

  // Show or hide the sticky footer button
  // $(window).on('scroll', function (event) {
  //     if ($(this).scrollTop() > 600) {
  //         $('.back-to-top').fadeIn(200)
  //     } else {
  //         $('.back-to-top').fadeOut(200)
  //     }
  // });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0
      },
      1500
    );
  });
});
