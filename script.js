// Get the logo container element
const logoContainer = document.querySelector('.logo-container');

// Variables to track scroll position and rotation
let lastScrollTop = 0;
let scrollRotation = 0;
let constantRotation = 0;

// Function to update logo rotation
function updateLogoRotation() {
    // Combine scroll-based rotation and constant rotation
    const totalRotation = scrollRotation + constantRotation;
    logoContainer.style.transform = `rotate(${totalRotation}deg)`;
}

// Constant rotation animation
function constantRotateAnimation() {
    constantRotation += 0.05; // Adjust speed of constant rotation here
    updateLogoRotation();
    requestAnimationFrame(constantRotateAnimation);
}

// Start constant rotation
//constantRotateAnimation();

// Scroll event listener
window.addEventListener('scroll', () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDelta = st - lastScrollTop;
    
    // Rotate based on scroll direction and amount
    scrollRotation += scrollDelta * 0.2; // Adjust this multiplier to change rotation speed

    // Update logo rotation
    updateLogoRotation();

    // Update last scroll position
    lastScrollTop = st <= 0 ? 0 : st;
}, false);