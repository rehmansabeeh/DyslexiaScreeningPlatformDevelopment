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
var selected_education_level;
(function ($) {
    "use strict";
    
    // First we store the name user entered
    
    var grade = $(".selected_grade").html(); 
    // var education_level;
    // $(".education_selection").click(function() {
    //     education_level = $(".education_selection").html();
    //     console.log(education_level)
    // })
    // console.log("HELLO")
    console.log(grade)
    
    $('.school_selection').click(function() {
    selected_education_level = "School";
    
   console.log(selected_education_level);    
    $('.college_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
    $('.university_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
        if(no_of_clicks_female%2 != 0){
            no_of_clicks_female++;
        }
        if(no_of_clicks_other%2 != 0){
            no_of_clicks_other++;
        }
        
        

        if(no_of_clicks_male%2 == 0){

    $('.school_selection').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    $('.school_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
}
no_of_clicks_male++;
    });

$('.college_selection').click(function() {
    selected_education_level = "College";


    $('.school_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
    $('.university_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
        
        if(no_of_clicks_male%2 != 0){
            no_of_clicks_male++;
        }
        if(no_of_clicks_other%2 != 0){
            no_of_clicks_other++;
        }
        

        if(no_of_clicks_female%2 == 0){

    $('.college_selection').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    $('.college_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
}
no_of_clicks_female++;

});

$('.university_selection').click(function() {
    selected_education_level = "University";

    
    $('.school_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
    $('.college_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
        if(no_of_clicks_male%2 != 0){
            no_of_clicks_male++;
        }
        if(no_of_clicks_female%2 != 0){
            no_of_clicks_female++;
        }
            
        if(no_of_clicks_other%2 == 0){

    $('.university_selection').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    $('.university_selection').css({
        'border': 'none',
        'border-radius': '6px',
        'background-color': '#ddd',
        'color': '#C6C1C3'
        });
}
no_of_clicks_other++;

});


// $("#form1").submit(function(){
//     var $form = $(this);

//     $.ajax({
//      type     : "POST",
//      cache    : false,
//      url      : "/create_profile_2",
//      dataType: 'json',
//      data: {gender_reached_or_not: "success" , grade_sent: grade},
//      success  : function(data) {
//          console.log(result.abc);
//      }
//     });
// })

$.when($(".next_button").click(function() {

$.ajax({
    
    url:'/create_profile_2', //the page containing python script
    type: "POST", //request type,
    dataType: 'text',
    data: JSON.stringify({'gender_reached_or_not': "success" , 'grade_sent': grade, 'selected_education_level_sent': selected_education_level}),
    contentType: "application/json",
    success:
    function(data){ 
                   
                    console.log(data) 
                  }  
         
        })
})).then(data)


    // <script>
    //    $("#submit_btn").click(function(e) {
    //             yourdiv = $("#rightdiv").html();
    //             $.ajax({
    //                     type: 'POST',
    //                     url: '/divinfo',
    //                     data: {'yourdiv': yourdiv},
    //                     success: function() {
    //                         alert('Successful!')
    //                     },
    //                     error: function() {
    //                         alert("Oops! Something went wrong.");
    //                     }
    //             });
    //         })  
    //   </script>

})(jQuery);












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
        
    
