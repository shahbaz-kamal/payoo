document
  .getElementById("button-cashing-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cash-out-div").classList.remove("hidden");
    document.getElementById("add-money-div").classList.add("hidden");
  });
document
  .getElementById("button-adding-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cash-out-div").classList.add("hidden");
    document.getElementById("add-money-div").classList.remove("hidden");
  });
