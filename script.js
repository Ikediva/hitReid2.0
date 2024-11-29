
// Reid Cry Game Logic (Final Version with Explosion Animation)
let hitCount = 0;
let stage = 1;
const reidImage = document.getElementById("reid-image");
const message = document.getElementById("message");

reidImage.addEventListener("click", () => {
    if (stage === 1) {
        hitCount++;
        if (hitCount < 5) {
            reidImage.style.transform = `scale(${1 + hitCount * 0.05})`; // Slight zoom effect
        } else {
            reidImage.src = "reid_cry.jpg"; // Change to crying image
            message.textContent = "You made Reid cry, touch to pacify him."; // Update message
            reidImage.style.transform = "scale(1)"; // Reset scale
            stage = 2; // Move to next stage
            hitCount = 0; // Reset hit count
        }
    } else if (stage === 2) {
        reidImage.src = "reid_happy.jpg"; // Change to happy image
        message.textContent = "Now Reid is happy, and he's going to eat you. Tap the screen 5 times to kill him."; // Update message
        stage = 3; // Move to next stage
        hitCount = 0; // Reset hit count
    } else if (stage === 3) {
        hitCount++;
        if (hitCount < 5) {
            reidImage.style.transform = `scale(${1 + hitCount * 0.05})`; // Slight zoom effect
        } else {
            message.textContent = "Reid exploded!"; // Update message
            explosionAnimation(); // Trigger explosion animation
            stage = 4; // Final stage
        }
    }
});

function explosionAnimation() {
    let explosionFrames = [
        "explode1.jpg",
        "explode2.jpg",
        "explode3.jpg",
        "explode4.jpg"
    ];
    let frameIndex = 0;
    const interval = setInterval(() => {
        if (frameIndex < explosionFrames.length) {
            reidImage.src = explosionFrames[frameIndex];
            frameIndex++;
        } else {
            clearInterval(interval);
            reidImage.style.display = "none"; // Remove image after animation
        }
    }, 500); // Change frames every 0.5 seconds
}
