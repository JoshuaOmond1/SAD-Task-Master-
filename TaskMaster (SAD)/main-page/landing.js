// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase auth service
const auth = firebase.auth();

// Function to handle user login
function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      console.log("User signed in:", userCredential.user.email);
      // Redirect or show the task manager page
    })
    .catch((error) => {
      console.error("Login error:", error.message);
      // Handle login errors (e.g., display error message)
    });
}

// Function to handle user sign up
function signupUser(event) {
  event.preventDefault();

  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      console.log("User signed up:", userCredential.user.email);
      // Redirect or show the task manager page
    })
    .catch((error) => {
      console.error("Signup error:", error.message);
      // Handle signup errors (e.g., display error message)
    });
}

// Event listeners for login and sign up forms
document.getElementById("loginForm").addEventListener("submit", loginUser);
document.getElementById("signupForm").addEventListener("submit", signupUser);
