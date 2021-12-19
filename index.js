const bars = document.querySelector(".fas");
const minimenu = document.querySelector("#minimenu");

function onClick() {
    minimenu.classList.remove("hidden");
}

bars.addEventListener("click", onClick);

