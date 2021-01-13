

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

    var urlParams = new URLSearchParams(window.location.search);
    var myParam = urlParams.get('id');

     $('.next_button').click(function() {
      var entered_username = $("#lusername").val();
    var entered_password = $("#lpassword").val();

 
  
  fetch(`${window.origin}/register_3`,{
    method : 'POST',
    credentials : "include",
    body : JSON.stringify({
      username : entered_username,
      password : entered_password,
      query_variable_in_url : myParam
    }),
    cache : 'no-store'
  }).then(function(response){
    if(response.status == 200)
    { 
      response.json().then(function(data_received){
        if (data_received['message']=='existing')
          {
            alert("already have an account")
            // window.location.href = `${window.origin}/register_3` + '?id=' + data_received['id_to_be_passed'];;
          }
        window.location.href = `${window.origin}/login`; /*+ '?id=' + data_received['id_to_be_passed'];*/
      })
    }
  }

  )
})
    // Here we need to send entered username and password  

    
})(jQuery);