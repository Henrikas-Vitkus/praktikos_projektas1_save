// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHRwZ4DCbFtrKFxRrxxxQj3VBtvbGSVr4",
    authDomain: "ihenrkalogin.firebaseapp.com",
    projectId: "ihenrkalogin",
    storageBucket: "ihenrkalogin.firebasestorage.app",
    messagingSenderId: "848486696023",
    appId: "1:848486696023:web:b22dd2a29112add1ef0f12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Logout functionality
document.getElementById('logout_button').addEventListener('click', () => {
    signOut(auth).then(() => {
        // Redirect to the login page after logout
        window.location.href = "login.html";
    }).catch((error) => {
        console.error('Error logging out:', error);
    });
});

const logoutButton = document.getElementById('logout_button');

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in
        logoutButton.textContent = "Atsijungti";
        logoutButton.onclick = () => {
            signOut(auth).then(() => {
                console.log("User logged out");
            }).catch((error) => {
                console.error("Error logging out:", error);
            });
        };
    } else {
        // User is logged out
        logoutButton.textContent = "Prisijungti";
        logoutButton.onclick = () => {
            window.location.href = "login.html";
        };
    }
});