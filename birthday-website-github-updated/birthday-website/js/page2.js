const blowButton = document.getElementById("blowButton");
const flames = document.querySelectorAll(".flame");

blowButton.addEventListener("click", () => {
    flames.forEach(flame => {
        flame.style.opacity = "0";
    });

    blowButton.style.display = "none";

    setTimeout(() => {
        window.location.href = "page3.html";
    }, 5000);
});
