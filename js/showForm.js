// Function that toggles/hides the contact form
window.onload = function() {
  document.getElementById("showForm").addEventListener("click", function() {
      x = document.getElementById('formElement');
      if (x.style.display === "none") {
          x.style.display = "block";
      } else {
          x.style.display = "none";
      }
  });
}