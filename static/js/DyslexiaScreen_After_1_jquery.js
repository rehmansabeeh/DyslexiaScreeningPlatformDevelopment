
var no_of_clicks_male = 0;
var no_of_clicks_female = 0;
var no_of_clicks_other = 0;
var country_code

(function ($) {
    "use strict";
    
    new WOW().init();
  
    // Header scroll class
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
  
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');
    var main_nav_height = $('#header').outerHeight();
  
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
    
      nav_sections.each(function() {
        var top = $(this).offset().top - main_nav_height,
            bottom = top + $(this).outerHeight();
    
        if (cur_pos >= top && cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
          main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
        }
      });
    });
    console.log("Insid JS")
    
    // $(".next_button").click(function(){
    //   console.log($("#phone").val())
    //   console.log($("#lemail").val())
    //   if($("#phone").val() == "" && $("#lemail").val() == "")
    //   {   
    //   }
    //   else{
    //     console.log("HARARE")
    //       if($("#phone").val() != false)
    //     { console.log("Email False")
    //       $("#lemail").prop('required',false);
    //     }
        
    //     else if ($("#lemail").val() != false)
    //     { console.log("Phone False")
    //       $("#phone").prop('required',false);
    //     }
    //   }
    // })
    
  
    var entered_email = "";
    var country_code = "";
    var phone_number = "";

    $("#lemail").change(function(){
      entered_email = $("#lemail").val();
    });
    $('#countryCode_drop_down').change(function(){
      country_code = $('#countryCode_drop_down:selected').text();
    });

    $('#phone').change(function(){
      phone_number = $("#phone").val();
    });


    $('.next_button').click(function() {  
      fetch(`${window.origin}/register_1`,{
        method : 'POST',
        credentials : "include",
        body : JSON.stringify({
          entered_email_user : entered_email,
          country_code_user : country_code,
          phone_number_user : phone_number
        }),
        cache :'no-cache'
      }).then(function(response){
        if(response.status == 200)
        { console.log("OKAY!")
          response.json().then( function(data){
            if(data['trajectory'] == "email"){
              window.location.href = `${window.origin}/register_using_email`
            }
            
            else if(data['trajectory'] == "phone_no")
              { window.location.href = `${window.origin}/register_using_phone` }
          })
        
        
      
      // window.location.href = `${window.origin}/q1_quiz`
    }
  }

  )


})




    
})(jQuery);