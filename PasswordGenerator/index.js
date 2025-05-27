function generatePassword(){

    const passwordLength = document.getElementById("passwordLengthBox").value;
    const includeLowercase = document.getElementById("includeLowercaseBox").checked;
    const includeUppercase = document.getElementById("includeUppercaseBox").checked;
    const includeNums = document.getElementById("includeNumsBox").checked;
    const includeSymbols = document.getElementById("includeSymbolsBox").checked;
    const passwordText = document.getElementById("passwordText");

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const symbolChars = ",.!@#$%^&*()-=_+[]{}?~;:";

    let includedChars = "";
    let password = "";

    if (includeLowercase){
        includedChars += lowercaseChars;
    }
    if (includeUppercase){
        includedChars += uppercaseChars;
    }
    if (includeNums){
        includedChars += numChars;
    }
    if (includeSymbols){
        includedChars += symbolChars;
    }

    if (!(includeLowercase) && !(includeUppercase) && !(includeNums) && !(includeSymbols)){
        passwordText.textContent = "Please select one checkbox.";
        return;
    }

    for (let i = 0; i < passwordLength; i++){
        password += [...includedChars][Math.floor(Math.random() * includedChars.length)];
    }

    passwordText.textContent = password;
}
