
function checkPassword() {
    var password = document.getElementById("passwordBox")
    var passwordText = password.value;
    if (passwordText == "obd") {
        return true;
    }
    alert("Пароль неверный");
    return false;
}