const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");
const passwordOutput = document.getElementById("password-output");
const lengthSlider = document.getElementById("length-slider");
const uppercaseCheckbox = document.getElementById("uppercase-checkbox");
const lowercaseCheckbox = document.getElementById("lowercase-checkbox");
const numbersCheckbox = document.getElementById("numbers-checkbox");
const symbolsCheckbox = document.getElementById("symbols-checkbox");
const strengthDisplay = document.getElementById("strength-display");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-=_+[]{}|;:,.<>?";

function generatePassword() {
  const length = lengthSlider.value;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  let characters = "";
  if (includeUppercase) characters += uppercaseLetters;
  if (includeLowercase) characters += lowercaseLetters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (characters === "") {
    passwordOutput.value = "password";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.value = password;
  updatePasswordStrength(password);
}

function updatePasswordStrength(password) {
  if (password.length < 8) {
    strengthDisplay.textContent = "Weak";
  } else if (password.length < 12) {
    strengthDisplay.textContent = "Medium";
  } else {
    strengthDisplay.textContent = "Strong";
  }
}

function copyPassword() {
  passwordOutput.select();
  document.execCommand("copy");
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", generatePassword);
uppercaseCheckbox.addEventListener("input", generatePassword);
lowercaseCheckbox.addEventListener("input", generatePassword);
numbersCheckbox.addEventListener("input", generatePassword);
symbolsCheckbox.addEventListener("input", generatePassword);

generatePassword(); // Generate a password on page load



