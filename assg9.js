/*******************
 * Date: 10/23/2022
 * Author: Lisa Coon
 * Class: CITW 165
 * Exercise: Exercise #9
 *******************/

    $(function () {
    $("#dogs").accordion();

  localStorage.setItem('assignment', 'Exercise 9');

  $('.open').on('click',function(){
    $('.modalContent').addClass('active');
  });
  $('.close').on('click', function(){
    $('.modalContent').removeClass('active');
  });
  });
