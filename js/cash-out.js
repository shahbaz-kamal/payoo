// Step 1: add event listener
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    // step 2: prevent Default loading
    event.preventDefault();
    // step 3: get pin & current balance
    const balanceCashOut = document.getElementById(
      "money-to-be-cashed-out"
    ).value;
    const verifyPinCashOut = document.getElementById(
      "pin-to-verify-cash-out"
    ).value;
    // Step 4: Verify Pin
    if (verifyPinCashOut === "1234") {
      //   step 5: Subtracting balance
      const currentBalance =
        document.getElementById("current-balance").innerText;
      const currentBalanceNumber = parseFloat(currentBalance);
      const moneyToBeSubtractedNumber = parseFloat(balanceCashOut);
      const newBalanceCashOut =
        currentBalanceNumber - moneyToBeSubtractedNumber;

      //   step 6: Updating the balance
      document.getElementById("current-balance").innerText = newBalanceCashOut;
      //    step 7: clearing input fields //
      document.getElementById("money-to-be-cashed-out").value = "";
      document.getElementById("pin-to-verify-cash-out").value = "";
    } else {
      prompt("Wrong pin");
    }
  });
