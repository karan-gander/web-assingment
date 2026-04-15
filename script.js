document.getElementById("bookBtn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hi");
  let name = document.getElementById("fname").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let age = document.getElementById("age").value.trim();

  // Name validation
  if (name === "") {
    alert("Please enter your full name");
    return;
  }

  // Mobile validation (10 digit number)
  let mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Enter valid 10 digit mobile number");
    return;
  }

  // Age validation
  if (age === "" || isNaN(age) || age <= 0 || age > 120) {
    alert("Enter valid age");
    return;
  }

  // If all valid
  alert("Form submitted successfully!");
});
