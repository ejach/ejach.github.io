$(function() {
  var form = $('#formElement')[0];
  $('#submit').click(function (event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(form);
    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      url: 'https://formspree.io/f/xwkakdyy',
      headers: { 'Accept': 'application/json' },
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 800000,
      // On success, load the span from the getPath
      success: function () {
        status.innerHTML = "Thanks for your submission!";
        $(form).trigger('reset');
      },
      // On failure, print errors
      error: function (e) {
        status.innerHTML = "Oops! There was a problem submitting your form";
      }
    });
  });
});
