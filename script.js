// 3D Fancy Celebration Animation Functions (jQuery)
function showCelebration() {
    // Overlay ko smoothly 3D zoom-in effect ke sath show karega[cite: 1]
    $('#celebration-overlay').fadeIn(400).css('display', 'flex');
}

function closeCelebration() {
    // Overlay ko smoothly hide karega[cite: 1]
    $('#celebration-overlay').fadeOut(400);
}

// Active link switcher and scroll effect
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});