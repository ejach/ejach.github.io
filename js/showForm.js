$(document).ready(function() {
  $('input').css('display', 'none');
  $('textarea').css('display', 'none');
    $("#showForm").click(function() {
      $("#formElement").fadeToggle(400);
      $('input').fadeToggle(600);
      $('textarea').fadeToggle(600);
    });
  });