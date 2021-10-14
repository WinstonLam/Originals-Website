window.onload = activeGallery;
$(window).on("load resize", checkWidth);
$(window).on("load resize", dataBox);

$(function () {
  $(".cta").on("click", ".menu", function () {
    $("main").css("filter", "blur(1rem) brightness(70%)");
    $("header").css("filter", "blur(1rem) brightness(70%)");
    $(".swiper-container.menu-swiper").addClass("selected");
    $(".menu-closer").addClass("selected");
    $("#menu-prev").addClass("selected");
    $("#menu-next").addClass("selected");
  });
});

$(function () {
  $(".menu-div").on("click", ".menu-closer", function () {
    $("main").css("filter", "blur(0) brightness(100%)");
    $("header").css("filter", "blur(0) brightness(100%)");
    $(".swiper-container.menu-swiper").removeClass("selected");
    $(".menu-closer").removeClass("selected");
    $("#menu-prev").removeClass("selected");
    $("#menu-next").removeClass("selected");
  });
});

$(function () {
  $("#glass-link").on(
    "click",
    "#glassbutton1,#glassbutton2,#glassbutton3,#glassbutton4",
    function () {
      var divID = $(this).attr("data-box");
      $(this).addClass("Active").siblings().removeClass("Active");
      $("#" + divID)
        .addClass("Active")
        .siblings()
        .removeClass("Active");
    }
  );
});
$(".hover").on("mouseleave", function () {
  $(this).removeClass("hover");
});
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

$(function () {
  $("#footer-links").on("click", ".footer-link", function () {
    var divID = $(this).attr("data-for");
    $("#" + divID)
      .addClass("Active")
      .siblings()
      .removeClass("Active");
  });
});

$(function () {
  $(".burgerbuttons").on("click", "#burger-link", function () {
    var divID = $(this).attr("data-for");
    var header = document.getElementById("header");
    $("#" + divID)
      .addClass("Active")
      .siblings()
      .removeClass("Active");
    $("#transparent").removeClass("show");
    $(header).removeClass("hide");
  });
});

$(function () {
  $("#nav-links").on("click", "#nav-link", function () {
    var divID = $(this).attr("data-for");
    console.log(divID);
    $("#" + divID)
      .addClass("Active")
      .siblings()
      .removeClass("Active");
  });
});

$(function () {
  $(".socials").on("click", ".burger", function () {
    var divID = $(this).attr("data-for");
    var header = document.getElementById("header");
    $("#" + divID).addClass("show");
    $(header).addClass("hide");
  });
});

$(function () {
  $("#transparent").on("click", ".burger_in", function () {
    var divID = $(this).attr("data-for");
    var header = document.getElementById("header");
    $("#" + divID).removeClass("show");
    $(header).removeClass("hide");
  });
});

$(function () {
  $("#gallerydiv").on("click", "#radio_g", function () {
    var divID = $(this).attr("data-for");
    console.log(divID);
    $("#" + divID).addClass("Active");
    $("#" + divID)
      .siblings()
      .removeClass("Active");
  });
});

function checkWidth() {
  if ($(window).width() < 751) {
    $("#gallerydiv").removeClass("Active");
    if ($("#gallerydiv").siblings(".Active").length == 0) {
      $("#gallerydiv_mobile").addClass("Active");
    }
  } else {
    $("#gallerydiv_mobile").removeClass("Active");
    if ($("#gallerydiv").siblings(".Active").length == 0) {
      $("#gallerydiv").addClass("Active");
    }
  }
}

function activeGallery() {
  if ($("#gallerydiv").siblings(".Active").length == 0) {
    $("#gallerydiv_mobile").addClass("Active");
  }
  if ($("#gallerydiv").siblings(".Active").length == 0) {
    $("#gallerydiv").addClass("Active");
  }
}
function dataBox() {
  if ($(window).width() < 751) {
    $("#glassbutton1").attr("data-box", "gallerydiv_mobile");
    $("#footer-link3").attr("data-for", "gallerydiv_mobile");
  } else {
    $("#glassbutton1").attr("data-box", "gallerydiv");
    $("#footer-link3").attr("data-for", "gallerydiv");
  }
}

$(window).on("scroll resize", function () {
  var scroll = window.pageYOffset;
  if ($(window).width() < 751) {
    if (scroll > 3) {
      $("#header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#header").removeClass("active");
    }
  } else {
    $("#header").removeClass("active");
  }
});
