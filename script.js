
function login() {
    const username =
        document.getElementById("username").value.trim();

    const message =
        document.getElementById("message");

    if (username === "") {
        message.textContent = "Please enter your username.";
    } else {
        message.textContent =
            "Welcome, " + username + "!";
    }
}
