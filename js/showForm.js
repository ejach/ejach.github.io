$(document).ready(function() {
  $('.card').css('display', 'none');
  $('.card').fadeIn(1000);
    $("#showForm").click(function() {
      $("#formElement").slideToggle(200);
    });
  });