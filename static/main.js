const params = new URLSearchParams(window.location.search);
const rating = document.getElementById("rating");
console.log(params);
const rating_value = params.get("rating");
console.log(rating_value);
rating.textContent = rating_value;
