// Function that toggles/hides the contact form
function showForm() {
  x =  document.getElementById('formElement');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}