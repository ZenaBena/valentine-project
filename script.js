const envContainer = document.getElementById("envelope-container");
const letContainer = document.getElementById("letter-container");
const letWindow = document.querySelector(".letter-window");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const title = document.getElementById("letter-title");
const panda = document.getElementById("letter-panda");
const buttonsBox = document.getElementById("letter-buttons");
const resultText = document.getElementById("final-text");

envContainer.addEventListener("click", () => {
    envContainer.style.display = "none";
    letContainer.style.display = "flex";
    setTimeout(() => {
        letWindow.classList.add("open");
    }, 50);
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

let currentScale = 1;
const popLimit = 4.0; 

yesBtn.addEventListener("click", () => {
    currentScale += 0.8;
    if (currentScale >= popLimit) {
        triggerSuccess();
    } else {
        yesBtn.style.transform = `scale(${currentScale})`;
    }
});

function triggerSuccess() {
    title.textContent = "I knew you would say yes! ❤️";
    panda.src = "dancing-panda.gif";
    buttonsBox.style.display = "none"; 
    resultText.style.display = "block";
    letWindow.style.justifyContent = "center";
}


function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // You can change this to 💖 or 💘
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Between 3-5s
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start making hearts
setInterval(createHeart, 300);

