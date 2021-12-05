window.onload = function() {
  var form = document.getElementById("formElement");
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      status.innerHTML = "Thanks for reaching out! I will respond as soon as I can.";
      form.reset()
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form, please try again."
    });
  }
  form.addEventListener("submit", handleSubmit)
}
