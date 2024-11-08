const ratingButtons = document.querySelectorAll(".rating-button");
const hiddenInput = document.getElementById("rating");
const form = document.getElementById("form");

ratingButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        ratingButtons.forEach((btn) => {
            btn.setAttribute("aria-pressed", false);
            btn.classList.remove("selected");
        });

        btn.classList.add("selected");

        hiddenInput.value = btn.getAttribute("data-value");
    });
});

form.addEventListener("submit", (e) => {
    if (hiddenInput.value == "") {
        alert("Please select a value");
        e.preventDefault();
    }
});
