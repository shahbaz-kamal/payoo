console.log("Home addede");
// step 1: Add an event handler button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // step 2: Prevent page reload after form submit
    event.preventDefault();
    const moneyToBeAdded = document.getElementById("money-to-be-added").value;
    const pinToVerify = document.getElementById("pin-to-verify").value;
  });
