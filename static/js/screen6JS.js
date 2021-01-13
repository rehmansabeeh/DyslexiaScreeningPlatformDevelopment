
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

(function ($) {
    "use strict";
    new WOW().init

    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
  
    // Smooth scroll for the navigation and links with .scrollto classes
    $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          var top_space = 0;
  
          if ($('#header').length) {
            top_space = $('#header').outerHeight();
  
            if (! $('#header').hasClass('header-scrolled')) {
              top_space = top_space - 20;
            }
          }
  
          $('html, body').animate({
            scrollTop: target.offset().top - top_space
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.main-nav, .mobile-nav').length) {
            $('.main-nav .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
// // Get the modal
//   var modal = document.getElementById("myModal");
  
//   // Get the button that opens the modal
//   var btn = document.getElementById("myBtn");
  
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
  
//   // When the user clicks the button, open the modal 
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }
  
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
  
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
//     }
//   }

console.log("HELL2O")


var selected_option_1;
var selected_option_2;
var selected_option_3;
var selected_option_4;
var selected_option_5;
var selected_option_6;
var selected_option_7;
var selected_option_8;
var selected_option_9;

$('.box-first').click(function(){
  selected_option_1 = $('.selected-first textt').html()
})
$('.box-second').click(function(){
  selected_option_2 = $('.selected-second textt').html()
})
$('.box-third').click(function(){
  selected_option_3 = $('.selected-third textt').html()
})

var correct_option_1 = $('.test_div1').html()
var correct_option_2 = $('.test_div2').html()
var correct_option_3 = $('.test_div3').html()
var correct_option_4 = $('.test_div4').html()
var correct_option_5 = $('.test_div5').html()
var correct_option_6 = $('.test_div6').html()
var correct_option_7 = $('.test_div7').html()
var correct_option_8 = $('.test_div8').html()
var correct_option_9 = $('.test_div9').html()


// var correct_option_1;
var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('id');
console.log(myParam)

$('.right-button').click(function(){
      $(".main").fadeTo(1000, 0.165);
      $(".exit_button_popup").fadeIn("slow");
})

$('.no_exit_confirmation_button').click(function(){
      $(".main").fadeTo(1000, 1);
      $(".exit_button_popup").fadeOut("slow");
})

$('.next_button').click(function() {
  
fetch(`${window.origin}/q5_quiz`,{
    method : 'POST',
    credentials : "include",
    body : JSON.stringify({
      selected : [selected_option_1,selected_option_2,selected_option_3,selected_option_4,selected_option_5,selected_option_6,selected_option_7,selected_option_8,selected_option_9],
      correct_answers : [correct_option_1,correct_option_2,correct_option_3,correct_option_4,correct_option_5,correct_option_6,correct_option_7,correct_option_8,correct_option_9],
      query_variable_in_url : myParam
    }),
    cache : 'no-cache'
  }).then(function(response){
    console.log("OKAY2")
    if(response.status == 200)
    { 
      console.log("OKAY!")
      response.json().then(function(data_received){
        window.location.href = `${window.origin}/test_start_8` + '?id=' + data_received['id_to_be_passed'];
      })

    }
  }

  )
})
})(jQuery)