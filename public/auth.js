document.getElementById("signup-link").addEventListener("click", () => {
    document.getElementById("auth-box").style.display = "none";
    document.getElementById("signup-box").style.display = "block";
});

document.getElementById("login-link").addEventListener("click", () => {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("auth-box").style.display = "block";
});

document.getElementById("signup-btn").addEventListener("click", async () => {
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    alert(await response.text());
});

document.getElementById("login-btn").addEventListener("click", async () => {
    const username = document.getElementById("auth-username").value.trim();
    const password = document.getElementById("auth-password").value.trim();

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    if (await response.json()) {
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
});
