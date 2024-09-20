// Step 1: Set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (addEventListener) {
    // step 2: Prevent default behaviour
    event.preventDefault();
    console.log("Login button clicked");
    // step 3: Get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);
    if (phoneNumber === "01799839985" && pinNumber === "1234") {
      console.log("You are logged in");
      window.location.href = "/home.html";
    } else {
      alert("Wrong phone Number or Pin Number");
    }
  });
