document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('.nav-links a[href="index.html"]');
    const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/";

    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            if (isHomePage) {
                // If already on homepage, scroll to top smoothly
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                // Redirect to homepage if on another page
                event.preventDefault();
                window.location.href = "index.html";
            }
        });
    }
});

// Ensure the script runs after the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    const skillsContent = document.querySelector(".skills-content");
    const toggleButton = document.querySelector(".expand-btn");

    // Ensure both elements exist before adding event listener
    if (toggleButton && skillsContent) {
        toggleButton.addEventListener("click", function () {
            // Toggle visibility
            if (skillsContent.style.display === "block") {
                skillsContent.style.display = "none";
                toggleButton.innerHTML = "Read More ▼"; // Change text back
            } else {
                skillsContent.style.display = "block";
                toggleButton.innerHTML = "Read Less ▲"; // Change text when expanded
            }
        });
    }
	function toggleSkills() {
    const skillsContent = document.querySelector('.skills-content');
    const button = document.querySelector('.expand-btn');
    
    if (skillsContent.classList.contains('hidden')) {
        skillsContent.classList.remove('hidden');
        button.textContent = "Read Less ▲";
    } else {
        skillsContent.classList.add('hidden');
        button.textContent = "Read More ▼";
    }
}

});
document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.querySelector(".services-link");

    if (servicesLink && window.location.pathname.includes("index.html")) {
        servicesLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
            document.querySelector("#services").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Check if on homepage
    const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/";

    // Smooth scroll for "Services" button on homepage
    if (isHomePage) {
        const servicesLink = document.querySelector(".services-link");
        if (servicesLink) {
            servicesLink.addEventListener("click", function (event) {
                event.preventDefault();
                document.querySelector("#services").scrollIntoView({
                    behavior: "smooth"
                });
            });
        }

        // Smooth scroll to top when clicking logo on homepage
        const logo = document.querySelector(".logo");
        if (logo) {
            logo.addEventListener("click", function (event) {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollToServicesLink = document.querySelector(".scroll-to-services");
    const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/";

    if (scrollToServicesLink && isHomePage) {
        scrollToServicesLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
            document.querySelector("#services").scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
