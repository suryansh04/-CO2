document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("purchase-modal");
    var buyButtons = document.querySelectorAll(".buy-btn");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("purchase-form");
  
    buyButtons.forEach(function(btn) {
      btn.onclick = function() {
        modal.style.display = "block";
      }
    });
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    form.onsubmit = function(event) {
      event.preventDefault();
      alert("Purchase completed successfully!");
      modal.style.display = "none";
      form.reset();
    }
  });