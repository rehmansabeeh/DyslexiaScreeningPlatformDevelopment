
(function ($) {
// $.when($(".next_button").click(function() {
// console.log("click")
// $.ajax({
    
//     url: '/test_1', //the page containing python script
//     type: "POST", //request type,
//     dataType: 'text',
//     data: JSON.stringify({'data_reached_or_not': "success" , 'first_language_Urdu': 'first_language' , 'bilingual_Urdu': 'bilingual' , 'reading_writing_in_Urdu': 'reading_writing_in_Urdu'  }),
//     contentType: "application/json",
//     success: function(response) {
//             console.log("asdasd")
//         }
         
//         })
// })).then()
// $("#form1").submit(function(event) {
//   // event.preventDefault();
// $.ajax({
    
//     url:'/test_1', //the page containing python script
//     type: "POST", //request type,
//     dataType: 'text',
//     data: JSON.stringify({'data_reached_or_not': "success" , 'first_language_Urdu': 'first_language' , 'bilingual_Urdu': 'bilingual' , 'reading_writing_in_Urdu': 'reading_writing_in_Urdu'  }),
//     contentType: 'application/json;charset=UTF-8',
//     success: function(date_reached_or_not){  
//                     console.log(date_reached_or_not) 
//                   }  
         
//         })
// }).done(function(){ //
  
// });

$.when($(".next_button").click(function() {

$.ajax({
    
    url:'/test_1', //the page containing python script
    type: "POST", //request type,
    dataType: 'text',
    data: JSON.stringify({'data_reached_or_not': "success" , 'first_language_Urdu': 1 , 'bilingual_Urdu': 2 , 'reading_writing_in_Urdu': 3  }),
    contentType: "application/json",
    success: function(date_reached_or_not){ console.log(date_reached_or_not) }  
        })
})).then()

})(jQuery);
