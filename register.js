 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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
  const submit = document.getElementById('registerButton');
  
submit.addEventListener("click", function(event){
    event.preventDefault()

    //inputs
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("Paskyra sėkmingai sukurta!")
        window.location.href = "appointment.html";
        // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });

});


