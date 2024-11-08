const ratingButtons = document.querySelectorAll(".rating-button");
const hiddenInput = document.getElementById("rating");

ratingButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        ratingButtons.forEach((btn) => {
            btn.setAttribute("aria-pressed", false);
            btn.classList.remove("selected");
        });

        btn.classList.add("selected");

        hiddenInput.value = btn.getAttribute("data-value");
    });
});
