
  // Navbar toggle for mobile
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    toggle.classList.toggle('active');
  });

  // Close menu when clicking a link (optional)
  const links = document.querySelectorAll('#nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      toggle.classList.remove('active');
    });
  });

  // Scroll shadow effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });


  // Select the form
const contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Page reload hone se rokta hai

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const eventType = document.querySelector('input[name="event"]:checked');

  // Basic validation
  if (!name || !email || !phone || !message || !eventType) {
    alert("⚠️ Please fill out all fields before submitting!");
    return;
  }

  // Store form data in an object
  const formData = {
    name: name,
    email: email,
    phone: phone,
    event: eventType.value,
    message: message,
  };

  // Save to localStorage (temporary storage in browser)
  let allEntries = JSON.parse(localStorage.getItem("registrations")) || [];
  allEntries.push(formData);
  localStorage.setItem("registrations", JSON.stringify(allEntries));

  // Show success message
  alert("✅ Registration successful! Thank you for contacting us.");

  // Reset the form after submission
  contactForm.reset();
});

  