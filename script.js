document.addEventListener("DOMContentLoaded", function () {
    const firstInterface = document.querySelector(".first-interface");
    const secondInterface = document.querySelector(".second-interface");
    const audioElement = document.getElementById("backgroundAudio");
    const messageBox = document.querySelector(".message-box");
    const heartsContainer = document.querySelector(".hearts-container");

    // Add event listener to the first interface
    firstInterface.addEventListener("click", function () {
        // Hide the first interface
        firstInterface.style.opacity = 0;
        setTimeout(function () {
            firstInterface.style.display = "none";
        }, 500);

        // Show the second interface
        secondInterface.style.display = "block";

        // Play the background audio
        audioElement.play();

        // Typewriter effect for the message
        typewriterEffect();

        // Add floating hearts
        addFloatingHearts();
    });

    function typewriterEffect() {
        const message = "Hello! This is kuchi puchi from the macro world having macro issues. I havee never iimagined having so real, so rare, so cute, so handsome, so sexy, so everything person in my life. Talking to you after so long on 12th july, I never imagined being this close to you. Thank you for making me strong, Thank you for making me laugh, Thank you for making me realise who i am, Thank you for being an important part of my life, Thank you for everything you have done for me. happppyyyy birthdayyyyyyyyy I LOVE YOU❤️";
        let i = 0;

        const type = setInterval(function () {
            if (i < message.length) {
                messageBox.innerHTML += message.charAt(i);
                i++;
            } else {
                clearInterval(type);
            }
        }, 30); // Adjust the typing speed as needed
    }

    function addFloatingHearts() {
        const hearts = ["❤️", "💕", "💞", "💓", "💗"];
        const heartCount = 10; // Number of hearts to display

        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement("span");
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = "absolute";
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.transform = `translate(-50%, -50%)`;
            heart.style.animation = `float 3s ease-in-out infinite`;

            heartsContainer.appendChild(heart);
        }
    }
});
