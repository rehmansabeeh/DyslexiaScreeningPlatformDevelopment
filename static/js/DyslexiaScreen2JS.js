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
var no_of_clicks_array = [0,0,0,0,0,0,0,0,0,0]
var selected_grade;

$('.circle_grade_option_0').click(function() {
    var i; 
    var num;
    
    for (i = 1; (i%10) != 0; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px'
        });
        
        
        // $('.circle_grade_option_'.concat(num.toString())).hover(function(){ $(this).css({
        //     'color': 'white',
        //     'background-color': '#3AAFA9',
        //     'border': '1px solid white'
        //     });
        //     }, function(){
        //     $(this).css({

        //     'border-radius': '50%',
        //     'width': 'fit-content',
        //     'color': '#9BA3A3', 'background-color': '#fff',
        //     'border': '1px solid #707070',
        //     'padding-bottom': '8px',
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'padding-top': '8px'
        //     });
        //     });
        

        // $('.circle_grade_option_'.concat(num.toString())).hover(function(){ $(this).css({
        //     'color': 'white',
        //     'background-color': '#3AAFA9',
        //     'border': '1px solid white'
        //     });
        //     }, function(){
        //     $(this).css({

        //     'border-radius': '50%',
        //     'width': 'fit-content',
        //     'color': '#9BA3A3', 'background-color': '#fff',
        //     'border': '1px solid #707070',
        //     'padding-bottom': '8px',
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'padding-top': '8px'
        //     });
        //     });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[0]%2 == 0){
        
        // $('.circle_grade_option_0').addClass('selected_grade');
        selected_grade = 1
        
        print("ZERO CLICK")
        $('.circle_grade_option_0').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white'
            });
        }

        else{
            $('.circle_grade_option_0').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
                });
            }
        
        no_of_clicks_array[0]++;

})
$('.circle_grade_option_1').click(function() {
    var i; 
    var num;
    for (i = 2; (i%10) != 1; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px'
        });
        
        
        // $('.circle_grade_option_'.concat(num.toString())).hover(function(){ $(this).css({
        //     'color': 'white',
        //     'background-color': '#3AAFA9',
        //     'border': '1px solid white'
        //     });
        //     }, function(){
        //     $(this).css({

        //     'border-radius': '50%',
        //     'width': 'fit-content',
        //     'color': '#9BA3A3', 'background-color': '#fff',
        //     'border': '1px solid #707070',
        //     'padding-bottom': '8px',
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'padding-top': '8px'
        //     });
        //     });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[1]%2 == 0){
        
        selected_grade = 2
        
        $('.circle_grade_option_1').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white'
            });
        }

        else{
            $('.circle_grade_option_1').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
                });
            }
        
        no_of_clicks_array[1]++;
})
$('.circle_grade_option_2').click(function() {
    var i; 
    var num;
    
    for (i = 3; (i%10) != 2; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px'
        });
        
        
        // $('.circle_grade_option_'.concat(num.toString())).hover(function(){ $(this).css({
        //     'color': 'white',
        //     'background-color': '#3AAFA9',
        //     'border': '1px solid white'
        //     });
        //     }, function(){
        //     $(this).css({

        //     'border-radius': '50%',
        //     'width': 'fit-content',
        //     'color': '#9BA3A3', 'background-color': '#fff',
        //     'border': '1px solid #707070',
        //     'padding-bottom': '8px',
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'padding-top': '8px'
        //     });
        //     });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[2]%2 == 0){
        
        selected_grade = 3
        
        $('.circle_grade_option_2').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white'
            });
        }

        else{
            $('.circle_grade_option_2').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
                });
            }
        
        no_of_clicks_array[2]++;  
})
$('.circle_grade_option_3').click(function() {
    var i; 
    var num;
    
    for (i = 4; (i%10) != 3; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px'
        });
        
        
        // $('.circle_grade_option_'.concat(num.toString())).hover(function(){ $(this).css({
        //     'color': 'white',
        //     'background-color': '#3AAFA9',
        //     'border': '1px solid white'
        //     });
        //     }, function(){
        //     $(this).css({

        //     'border-radius': '50%',
        //     'width': 'fit-content',
        //     'color': '#9BA3A3', 'background-color': '#fff',
        //     'border': '1px solid #707070',
        //     'padding-bottom': '8px',
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'padding-top': '8px'
        //     });
        //     });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[3]%2 == 0){
        
        selected_grade = 4
        
        $('.circle_grade_option_3').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white'
            });
        }

        else{
            $('.circle_grade_option_3').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
                });
            }
        
        no_of_clicks_array[3]++;
})
$('.circle_grade_option_4').click(function() {
    var i; 
    var num;
    
    for (i = 5; (i%10) != 4; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px'
        });
        
        
        // $('.circle_grade_option_'.concat(num.toString())).hover(function(){ $(this).css({
        //     'color': 'white',
        //     'background-color': '#3AAFA9',
        //     'border': '1px solid white'
        //     });
        //     }, function(){
        //     $(this).css({

        //     'border-radius': '50%',
        //     'width': 'fit-content',
        //     'color': '#9BA3A3', 'background-color': '#fff',
        //     'border': '1px solid #707070',
        //     'padding-bottom': '8px',
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'padding-top': '8px'
        //     });
        //     });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[4]%2 == 0){
        
        selected_grade = 5
        
        $('.circle_grade_option_4').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white'
            });
        }

        else{
            $('.circle_grade_option_4').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px'
                });
            }
        
        no_of_clicks_array[4]++;
})
$('.circle_grade_option_5').click(function() {
    var i; 
    var num;
    
    for (i = 6; (i%10) != 5; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px',
        });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[5]%2 == 0){
        
        selected_grade = 6
        
        $('.circle_grade_option_5').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white',
            });
        }

        else{
            $('.circle_grade_option_5').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
                });
            }
        
        no_of_clicks_array[5]++;
})
$('.circle_grade_option_6').click(function() {
    var i; 
    var num;
    
    for (i = 7; (i%10) != 6; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px',
        });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[6]%2 == 0){
        
        selected_grade = 7
        
        $('.circle_grade_option_6').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white',
            });
        }

        else{
            $('.circle_grade_option_6').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
                });
            }
        
        no_of_clicks_array[6]++;
})
$('.circle_grade_option_7').click(function() {
    var i; 
    var num;
    
    for (i = 8; (i%10) != 7; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px',
        });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[7]%2 == 0){
        
        selected_grade = 8
        
        $('.circle_grade_option_7').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white',
            });
        }

        else{
            $('.circle_grade_option_7').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
                });
            }
        
        no_of_clicks_array[7]++;
})
$('.circle_grade_option_8').click(function() {
    var i; 
    var num;
    
    for (i = 9; (i%10) != 8; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px',
        });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[8]%2 == 0){
        
        selected_grade = 9
        
        $('.circle_grade_option_8').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white',
            });
        }

        else{
            $('.circle_grade_option_8').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
                });
            }
        
        no_of_clicks_array[8]++;
})

$('.circle_grade_option_9').click(function() {
    var i; 
    var num;
    
    for (i = 0; (i%10) != 9; i++) {
        num = i%10;
        
        
        var no_of_clicks_iterated = no_of_clicks_array[num]
        $('.circle_grade_option_'.concat(num.toString())).css({
            'border-radius': '50%',
            'width': 'fit-content',
            'color': '#9BA3A3', 'background-color': '#fff',
            'border': '1px solid #707070',
            'padding-bottom': '8px',
            'padding-left': '15px',
            'padding-right': '15px',
            'padding-top': '8px',
        });
    
        if(no_of_clicks_array[num]%2 != 0){
            no_of_clicks_array[num]++;
        }
    }
    
    
    if(no_of_clicks_array[9]%2 == 0){
        
        selected_grade = 10
        
        $('.circle_grade_option_9').css({
            'color': 'white',
            'background-color': '#3AAFA9',
            'border': '1px solid white',
            });
        }

        else{
            $('.circle_grade_option_9').css({
                'border-radius': '50%',
                'width': 'fit-content',
                'color': '#9BA3A3', 'background-color': '#fff',
                'border': '1px solid #707070',
                'padding-bottom': '8px',
                'padding-left': '15px',
                'padding-right': '15px',
                'padding-top': '8px',
                });
            }
        
        no_of_clicks_array[9]++;
})

var urlParams = new URLSearchParams(window.location.search);
var myParam = urlParams.get('id');
console.log(myParam)

$('.next_button').click(function() {

 
  
  fetch(`${window.origin}/create_profile_2`,{
    method : 'POST',
    credentials : "include",
    body : JSON.stringify({
      grade_sent : selected_grade,
      selected_education_level_sent : selected_education_level,
      query_variable_in_url: myParam
    }),
    cache : 'no-store'
  }).then(function(response){
    if(response.status == 200)
    { 
      response.json().then(function(data_received){
        window.location.href = `${window.origin}/create_profile_3` + '?id=' + data_received['id_to_be_passed'];
      })
    }
  }

  )
})
})(jQuery);
    
    // First we store the name user entered 
    // var education_level;
    // $(".education_selection").click(function() {
    //     education_level = $(".education_selection").html();
    //     console.log(education_level)
    // })
    // console.log("HELLO")
//     var selected_education_level;



// $.when($(".next_button").click(function() {

// $.ajax({
    
//     url:'/create_profile_2', //the page containing python script
//     type: "POST", //request type,
//     dataType: 'text',
//     data: JSON.stringify({'gender_reached_or_not': "success" , 'selected_education_level_sent': selected_education_level}),
//     contentType: "application/json",
//     success: function(date_reached_or_not){  
//                     console.log(date_reached_or_not) 
//                   }  
         
//         })
// })).then(data)


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
        
    
