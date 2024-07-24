document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.getElementById("typing-text");
  const text = "I'm a Java Full Stack Developer, Web Designer, UI/UX Designer";
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();

  const links = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll(".content-section");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("data-section");

      sections.forEach((section) => {
        if (sectionId === "about") {
          section.classList.remove("hidden");
        } else if (section.id === sectionId) {
          section.classList.remove("hidden");
        } else {
          section.classList.add("hidden");
        }
      });

      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    });
  });
});
