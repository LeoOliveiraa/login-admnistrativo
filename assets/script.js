document.getElementById("enviar").addEventListener("click", function () {
    var loginInput = document.getElementById("login");
    var loginValue = loginInput.value;
    
    // Use a expressão regular para verificar se o input contém apenas letras
    var regex = /^[a-zA-Z]+$/;
    
    if (regex.test(loginValue)) {
        return;
    } else {
        alert("Login inválido! Insira apenas letras.");
    }
});