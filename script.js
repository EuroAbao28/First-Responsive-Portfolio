/*==================== toggle icon navbar ====================*/
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll section active link ====================*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

console.log(sections, navLinks);

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    // console.log(top);
    const offset = sec.offsetTop - 150;
    // console.log(offset);
    const height = sec.offsetHeight;
    // console.log(height);
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar for adding border-bottom shadow ====================*/
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  console.log(header);

  /*==================== remove toggle icon and navbar when click the navbar link ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "100px",
  duration: 2000,
  delay: 100,
});

// Home
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img", { origin: "right" });

// About
ScrollReveal().reveal(".about-img img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

// Services
ScrollReveal().reveal(".box1", { origin: "left" });
ScrollReveal().reveal(".box2", { origin: "bottom" });
ScrollReveal().reveal(".box3", { origin: "right" });

// Portfolio
ScrollReveal().reveal(".portfolio-container", { origin: "bottom" });

// Contact
ScrollReveal().reveal(".contact form", { origin: "bottom" });

/*==================== Typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["4th Student", "Frontend Developer", "Backend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
