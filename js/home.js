// step 1: Add an event handler button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // step 2: Prevent page reload after form submit
    event.preventDefault();
    // document.getElementById("adding-money").style.display = "block";
    // step3 : get money to be added & verify pin
    const moneyToBeAdded = document.getElementById("money-to-be-added").value;
    const pinToVerify = document.getElementById("pin-to-verify").value;
    if (pinToVerify === "1234") {
      //   step 4: get the current balance
      const balance = document.getElementById("current-balance").innerText;
      // ste5 5:add moneyToBeAdded with currentBalance
      const addMoneyNumber = parseFloat(moneyToBeAdded);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      //   Stet 6: showing the total balance
      document.getElementById("current-balance").innerText = newBalance;
      //   clearing input fields
      document.getElementById("money-to-be-added").value = " ";
      document.getElementById("pin-to-verify").value = "";
    } else {
      alert("Wrong pin");
    }
  });
