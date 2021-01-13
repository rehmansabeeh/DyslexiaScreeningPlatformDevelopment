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
var selected_gender = "";
(function ($) {
    "use strict";
    
    // First we store the name user entered
    var entered_name = ""; 
    var entered_month = "";
    var entered_year = ""; 
    var entered_day = "";
  
$('#lname').change(function(){
  entered_name = $('#lname').val();
  
});
$('#dob-month').change(function(){
  entered_month = $('#dob-month').val();
  
});
$('#dob-year').change(function(){
  entered_year = $('#dob-year').val();
});
$('#dob-day').change(function(){
  entered_day = $('#dob-day').val();
});

$('.name_form_male').click(function() {

    
    $('.name_form_female').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
    $('.name_form_other').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
        if(no_of_clicks_female%2 != 0){
            no_of_clicks_female++;
        }
        if(no_of_clicks_other%2 != 0){
            no_of_clicks_other++;
        }
        
        

        if(no_of_clicks_male%2 == 0){
            selected_gender = "Male";
    $('.name_form_male').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    selected_gender = "";
    $('.name_form_male').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
}
no_of_clicks_male++;
// $.ajax({
//     url:"create_profile", //the page containing python script
//     type: "post", //request type,
//     dataType: 'json',
//     data: { gender_reached_or_not: "success" , gender: "male"},
//     success:function(result){
//     console.log(result.abc);
//           }
//         });


    
    });

$('.name_form_female').click(function() {
    selected_gender = "Female";


    $('.name_form_male').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
    $('.name_form_other').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
        
        if(no_of_clicks_male%2 != 0){
            no_of_clicks_male++;
        }
        if(no_of_clicks_other%2 != 0){
            no_of_clicks_other++;
        }
        

        if(no_of_clicks_female%2 == 0){
            selected_gender = "Female";
            $('.name_form_female').css({
            'border': 'none',
            'border-radius': '6px',
            'background-color': '#3AAFA9',
            'color': '#fff'
            });
}
else{
    selected_gender = "";
    $('.name_form_female').css({
       'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
}
no_of_clicks_female++;
// $.ajax({
//     url:"create_profile", //the page containing python script
//     type: "post", //request type,
//     dataType: 'json',
//     data: {gender_reached_or_not: "success" , gender: "female"},
//     success:function(result){
//     console.log(result.abc);
//           }
//         });
});

$('.name_form_other').click(function() {
    selected_gender = "Other";

    
    $('.name_form_male').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
    $('.name_form_female').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
        if(no_of_clicks_male%2 != 0){
            no_of_clicks_male++;
        }
        if(no_of_clicks_female%2 != 0){
            no_of_clicks_female++;
        }
        
    
        if(no_of_clicks_other%2 == 0){
            selected_gender = "Other";
    $('.name_form_other').css({
    'border': 'none',
    'border-radius': '6px',
    'background-color': '#3AAFA9',
    'color': '#fff'
    });
}
else{
    selected_gender = "";
    $('.name_form_other').css({
        'border': '1px solid #B4ADB0',
        'padding': '10px',
        'border-radius': '6px',
        'margin': '7px',
        'font-weight': 'initial',
        'background-color': '#fff',
        'color': '#B4ADB0',
        'transition': 'ease all 0.3s'
        });
}
no_of_clicks_other++;
});

$('.next_button').click(function() {

if(selected_gender == "" || entered_name == "" || entered_month == "" || entered_year == "" || entered_day == ""){
    alert("Kindly fill all the fields!")
}
else{   
    fetch(`${window.origin}/create_profile_1`,{
        method : 'POST',
        credentials : "include",
        body : JSON.stringify({
          entered_name_user : entered_name,
          entered_month_user : entered_month,
          entered_year_user : entered_year,
          entered_day_user : entered_day,
          selected_gender_user : selected_gender 
        }),
        cache :'no-store'
      }).then(function(response){
        console.log("OKAY2")
        if(response.status == 200)
        
        { 
          console.log("OKAY!")
          response.json().then(function(data_received){
            
                window.location.href = `${window.origin}/create_profile_2` + '?id=' + data_received['id_to_be_passed'];
            
            
            
          })
        }
      }

      )
    }
})

            
    
})(jQuery);