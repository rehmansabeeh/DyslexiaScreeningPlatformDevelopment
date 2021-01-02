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
var no_of_clicks_male = 0;
var no_of_clicks_female = 0;
var no_of_clicks_other = 0;
var selected_gender;


(function ($) {
    "use strict";
    new WOW().init();

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
    // First we store the name user entered
    // var entered_name = $("#lname").value;
//     $('.gender_selection_male').click(function() {
//     selected_gender = "Male";
    
    console.log(selected_gender);    
//     $('.gender_selection_female').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//     $('.gender_selection_other').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//         if(no_of_clicks_female%2 != 0){
//             no_of_clicks_female++;
//         }
//         if(no_of_clicks_other%2 != 0){
//             no_of_clicks_other++;
//         }
        
        

//         if(no_of_clicks_male%2 == 0){

//     $('.gender_selection_male').css({
//     'border': 'none',
//     'border-radius': '6px',
//     'background-color': '#3AAFA9',
//     'color': '#fff'
//     });
// }
// else{
//     $('.gender_selection_male').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
// }
// no_of_clicks_male++;
// // $.ajax({
// //     url:"create_profile", //the page containing python script
// //     type: "post", //request type,
// //     dataType: 'json',
// //     data: { gender_reached_or_not: "success" , gender: "male"},
// //     success:function(result){
// //     console.log(result.abc);
// //           }
// //         });


    
//     });

// $('.gender_selection_female').click(function() {
//     selected_gender = "Female";


//     $('.gender_selection_male').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//     $('.gender_selection_other').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
        
//         if(no_of_clicks_male%2 != 0){
//             no_of_clicks_male++;
//         }
//         if(no_of_clicks_other%2 != 0){
//             no_of_clicks_other++;
//         }
        

//         if(no_of_clicks_female%2 == 0){

//     $('.gender_selection_female').css({
//     'border': 'none',
//     'border-radius': '6px',
//     'background-color': '#3AAFA9',
//     'color': '#fff'
//     });
// }
// else{
//     $('.gender_selection_female').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
// }
// no_of_clicks_female++;
// // $.ajax({
// //     url:"create_profile", //the page containing python script
// //     type: "post", //request type,
// //     dataType: 'json',
// //     data: {gender_reached_or_not: "success" , gender: "female"},
// //     success:function(result){
// //     console.log(result.abc);
// //           }
// //         });
// });

// $('.gender_selection_other').click(function() {
//     selected_gender = "Other";

    
//     $('.gender_selection_male').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//     $('.gender_selection_female').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
//         if(no_of_clicks_male%2 != 0){
//             no_of_clicks_male++;
//         }
//         if(no_of_clicks_female%2 != 0){
//             no_of_clicks_female++;
//         }
        
    
//         if(no_of_clicks_other%2 == 0){

//     $('.gender_selection_other').css({
//     'border': 'none',
//     'border-radius': '6px',
//     'background-color': '#3AAFA9',
//     'color': '#fff'
//     });
// }
// else{
//     $('.gender_selection_other').css({
//         'border': 'none',
//         'border-radius': '6px',
//         'background-color': '#ddd',
//         'color': '#C6C1C3'
//         });
// }
// no_of_clicks_other++;
// // $.ajax({
// //     url:"create_profile", //the page containing python script
// //     type: "post", //request type,
// //     dataType: 'json',
// //     data: {gender_reached_or_not: "success" , gender: "other"},
// //     success:function(result){
// //     console.log(result.abc);
// //           }
// //         });
// });

// Selecting date of birth
// var day;
// var month;
// var year;
// $('#dob-day').click(function(){
//     day = $('#dob-day option:selected').text();
    
// });
// $('#dob-month').click(function(){
//     month = $('#dob-month option:selected').text();
//     console.log(month);
    
// });
// $('#dob-year').click(function(){
//     year = $('#dob-year option:selected').text();
//     });
// $.ajax({
//     url:"create_profile_1", //the page containing python script
//     type: "post", //request type,
//     dataType: 'json',
//     data: {date_reached_or_not: "success", day_selected: day , month_selected: month, year_selected: year },
//     success:function(result){
//     console.log(result.abc);
//             }
//         });
// $('.next_button').click(function(){
    
// });
        
    
})(jQuery);