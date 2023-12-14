// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get reference to the login form
const loginForm = document.getElementById("loginContainer");

// Handle form submission
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign in with email and password
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log("Signed in:", user);
    })
    .catch((error) => {
      console.error("Error during signin:", error.message);
    });
});
