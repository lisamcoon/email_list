/*******************
 * Date: 11/4/2022
 * Author: Lisa Coon
 * Class: CITW 165
 * Exercise: Exercise #10
 *******************/

$(function () {

$("#email_form").validate({
          rules:{
            email: {
            email: true,
            required: true
        },
        email_confirm: {
            required: true,
            email: true,
            equalTo: "#email"
        },
        first_name: { 
            lettersonly: true, 
            minlength: 2               
            },
        last_name: {
            lettersonly: true,
            minlength: 2 
        },
        zip: {
            required: true,
            minlength: 5, 
            digits: true
        }

    },
   
    
});

  });