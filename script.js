// TODO: Implement the password generation logic based on user input
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('includeUppercase');
const lowercaseDOM = document.getElementById('includeLowercase');
const numbersDOM = document.getElementById('includeNumbers');
const symbolsDOM = document.getElementById('includeSpecialChars'); 
const generateBtn = document.getElementById('generateBtn');
const copybtnDOM = document.getElementById('copyBtn');
const resultDOM = document.getElementById('passwordOutput');

const generatePassword = (length, options) {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charPool = '';

    if (options.includeUppercase) charPool += uppercase;
    if (options.includeLowercase) charPool += lowercase;
    if (options.includeNumbers) charPool += numbers;
    if (options.includeSpecialChars) charPool += specialChars;

    if (charPool === '') {
        throw new Error('At least one character type must be selected.');
    };

    // TODO: Generate the password based on the selected criteria
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomChar = charPool[Math.floor(Math.random() * charPool.length)];
        password += randomChar;
    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output

function handleGeneratePassword() {
    const length = parseInt(document.getElementById("length").value);
    const options = {
      includeUppercase: document.getElementById("includeUppercase").checked,
      includeLowercase: document.getElementById("includeLowercase").checked,
      includeNumbers: document.getElementById("includeNumbers").checked,
      includeSpecialChars: document.getElementById("includeSpecialChars").checked,
    };
  
    try {
          const password = generatePassword(length, options);
          document.getElementById("passwordOutput").textContent = password;
      } catch (error) {
          alert(error.message); 
      }
  
    // TODO: Add event listener to the button to call generatePassword and display the output
  
    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").textContent = password;
  }
// BONUS: Implement the copy to clipboard functionality
copybtnDOM.addEventListener('click',() =>{
    const password = resultDOM.innerText;
})
module.exports = {generatePassword};
if (typeof document !== 'undefined') {
    const element = document.getElementById('myElement');
}
