const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const newUsername = document.getElementById("newUsername").value;
        const newPassword = document.getElementById("newPassword").value;

        if (newUsername && newPassword) {
            localStorage.setItem("username", newUsername);
            localStorage.setItem("password", newPassword);

            alert("Usuário registrado com sucesso! Agora faça login.");
            document.getElementById("newUsername").value = "";
            document.getElementById("newPassword").value = "";
            window.location.href = "login.html";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("Usuário ou senha incorretos. Tente novamente.");
        }
    });
}


const alertButton = document.getElementById("alertButton");

if (alertButton) {
    alertButton.addEventListener("click", function() {
        alert("Seus dados são criptografados e protegidos para uma melhor experiência! ");
    });
}
