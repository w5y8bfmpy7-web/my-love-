function nextScreen(number) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(function(screen) {
    screen.classList.remove("active");
  });

  const nextScreenElement = document.getElementById("screen" + number);

  if (nextScreenElement) {
    nextScreenElement.classList.add("active");
  }

  if (number === 12) {
    createLove();
  }
}

let counterStarted = false;

function startCounter() {
  if (counterStarted) {
    return;
  }

  counterStarted = true;

  const counter = document.getElementById("counter");
  const countButton = document.getElementById("countButton");
  const afterCounter = document.getElementById("afterCounter");

  let number = 0;

  const interval = setInterval(function() {
    number++;

    if (number < 100) {
      counter.textContent = number + "%";
    } else {
      clearInterval(interval);

      counter.textContent = "∞ ❤️";

      if (countButton) {
        countButton.style.display = "none";
      }

      if (afterCounter) {
        afterCounter.style.display = "inline-block";
      }
    }
  }, 25);
}

function createLove() {
  const container = document.getElementById("floating-love");

  if (!container) {
    return;
  }

  const symbols = ["❤️", "💋", "💕", "💗"];

  for (let i = 0; i < 60; i++) {
    const love = document.createElement("div");

    love.className = "floating";
    love.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    love.style.left =
      Math.random() * 100 + "%";

    love.style.animationDuration =
      3 + Math.random() * 4 + "s";

    love.style.animationDelay =
      Math.random() * 4 + "s";

    love.style.fontSize =
      20 + Math.random() * 22 + "px";

    container.appendChild(love);
  }
}