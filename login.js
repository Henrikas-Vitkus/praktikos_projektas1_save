 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

  // Your web app's Firebase configuration
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



  //submit button
  const submit = document.getElementById('login_button');
  const emailInput = document.getElementById('email_input');
  const passwordInput = document.getElementById('password_input');
  
submit.addEventListener("click", function(event){
    event.preventDefault()

    //inputs
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        window.location.href = "appointment.html";
        // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Prisijungti nepavyko, bandykite dar kartą')
      // ..
    });

});
//

onAuthStateChanged(auth, (user)=>{
    if (user){
        window.location.href = "appointment.html";
    }
})