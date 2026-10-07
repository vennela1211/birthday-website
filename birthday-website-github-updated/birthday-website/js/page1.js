const TARGET_PASSCODE = "0812";
let currentInputBuffer = "";

const keypadButtons = document.querySelectorAll(".key-btn");
const indicatorBoxes = document.querySelectorAll(".dot");

keypadButtons.forEach(buttonElement => {
  buttonElement.addEventListener("click", () => {
    const value = buttonElement.textContent.trim();

    if (value === "⌫") {
      clearPasscodeFields();
      return;
    }

    if (value === "#") return;

    if (currentInputBuffer.length < 4) {
      currentInputBuffer += value;
      refreshVisualIndicators();

      if (currentInputBuffer.length === 4) {
        setTimeout(executeSecurityCheck, 250);
      }
    }
  });
});

function refreshVisualIndicators() {
  indicatorBoxes.forEach((boxElement, index) => {
    boxElement.classList.toggle("filled", index < currentInputBuffer.length);
  });
}

function executeSecurityCheck() {
  const lockContainer = document.querySelector(".lock-screen-container");

  if (currentInputBuffer === TARGET_PASSCODE) {
    lockContainer.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "page2.html";
    }, 800);
  } else {
    lockContainer.classList.add("shake");
    clearPasscodeFields();

    setTimeout(() => {
      lockContainer.classList.remove("shake");
    }, 400);
  }
}

function clearPasscodeFields() {
  currentInputBuffer = "";
  refreshVisualIndicators();
}
