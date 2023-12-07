const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const isAdmin = document.querySelector("#adminlog").checked;


  if (username && password) {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        // Check if the "Administrator/teacher" checkbox is checked
        if (isAdmin) {
          document.location.replace("/admin"); 
        } else {
          document.location.replace("/dashboard"); //parents route
        }
      } else {
        console.error("Failed to log in");
        alert("Failed to log in. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  }
};

document
  .querySelector(".loginForm")
  .addEventListener("submit", loginFormHandler);