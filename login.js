function validateLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Usuario y contraseña predefinidos para validar
    const validUser = "admin@example.com";
    const validPassword = "123456";

    if (email === validUser && password === validPassword) {
        alert("¡Login exitoso! Bienvenido.");
        // Redirige a otra página
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
