function validateEmail() {
    var input = document.getElementById('inputText').value;
    document.getElementById('validationDiv').innerHTML = input;
    var regex = /[a-zA-Z0-9_]{3,}@[a-zA-Z0-9_]{3,}.[a-zA-Z0-9_]{2,4}/g;
    var valid = input.match(regex);

    if (valid === null) {
        document.getElementById('validationDiv').style.background = 'red';
    } else
        document.getElementById('validationDiv').style.background = 'lightgreen';
}