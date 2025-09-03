function SendEmail() {
  var templateParams = {
    message: document.getElementById("contact-message").value,
    email: document.getElementById("contact-email").value,
  };
  if (templateParams.email === "" || templateParams.message === "") {
    alert("Please fill in all fields before sending.");
    return;
  }
  emailjs.send("service_bepwoah", "template_miy7aez", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully! Please allow some time for a response.");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Please try again later.");
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
  }
});
