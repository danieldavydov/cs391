function checkAge() {
  // Checks the inputted age of the user
  // The input must be:
  // 1) A number
  // 2) An integer
  // 3) Positive
  // 4) The following range: [18, 120]

  const ageInput = document.getElementById("age-input").value;
  console.log(ageInput);

  // type-cast the input
  const age = Number(ageInput);
  console.log(age);
  let errorMessage = "";

  // check if the age input is a number
  if (isNaN(age)) {
    errorMessage = "Not a number entered, try again";
  } else if (age % 1 != 0) {
    errorMessage = "Cannot enter decimal";
  } else if (age <= 0) {
    errorMessage = "Age must be positive";
  } else if (age < 18) {
    errorMessage = "You must be at least 18 years old";
  } else if (age > 120) {
    errorMessage = "You cannot be over 120 years old";
  }

  if (errorMessage === "") {
    // No error
    document.getElementById("main-content").style.visibility = "visible";
    document.getElementById("error-content").style.visibility = "hidden";
    document.getElementById("error-message").style.visibility = "hidden";
  } else {
    document.getElementById("error-message").innerHTML = errorMessage;
    console.log("here");
    document.getElementById("main-content").style.visibility = "hidden";
    document.getElementById("error-content").style.visibility = "visible";
    document.getElementById("error-message").style.visibility = "visible";
  }
}
