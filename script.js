document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    const images = ["image1.png", "image2.png", "image3.png", "image4.png"]; // List of background images
    let index = 0;
    const homeSection = document.getElementById("HOME");

    // Apply initial background
    homeSection.style.backgroundImage = `url(${images[index]})`;
    homeSection.style.transition = "background-image 1s ease-in-out"; // Smooth transition

    function changeBackground() {
        index = (index + 1) % images.length; // Move to next image (loop)
        homeSection.style.opacity = 0; // Start fading out

        setTimeout(() => {
            homeSection.style.backgroundImage = `url(${images[index]})`;
            homeSection.style.opacity = 1; // Fade in new image
        }, 500); // 500ms delay for fade effect
    }

    setInterval(changeBackground, 4000); // Change image every 4 seconds
});
