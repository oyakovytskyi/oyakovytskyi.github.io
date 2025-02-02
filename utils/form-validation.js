document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      emailInput.classList.remove("error", "success");
      emailError.style.display = "none";
    } else if (emailPattern.test(emailValue)) {
      emailInput.classList.remove("error");
      emailInput.classList.add("success");
      emailError.style.display = "none";
    } else {
      emailInput.classList.add("error");
      emailInput.classList.remove("success");
      emailError.style.display = "block";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
      !emailInput.classList.contains("error") &&
      emailInput.value.trim() !== ""
    ) {
      showToast("Message sent successfully!", "success");
    }

    showToast("Message sent successfully!");

    form.reset();
    emailInput.classList.remove("success");
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast show";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
});
