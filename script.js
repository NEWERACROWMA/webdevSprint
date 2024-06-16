document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000); 
    }

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "newUsername" && password === "newPassword") {
                alert("Login realizado com sucesso!");
                window.location.href = "index.html";
            } else {
                alert("Usuário ou senha incorretos. Tente novamente.");
            }
        });
    }

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const newUsername = document.getElementById("newUsername").value;
            const newPassword = document.getElementById("newPassword").value;

            if (newUsername && newPassword) {
                alert("Usuário registrado com sucesso! Agora faça login.");
                document.getElementById("newUsername").value = "";
                document.getElementById("newPassword").value = "";
                window.location.href = "login.html";
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }

    const alertButton = document.getElementById("alertButton");

    if (alertButton) {
        alertButton.addEventListener("click", function() {
            alert("Esse é um alerta!");
        });
    }
});
