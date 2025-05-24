document.getElementById('student-register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Assuming Firebase registration code is here...
    document.getElementById('student-register-form').innerHTML = `
      <h2>Registration Successful!</h2>
      <p>Thank you for registering. Please login to continue.</p>
      <button onclick="window.location.href='index.html'">Login Now</button>
    `;
  });
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtqxYvJSqZgjxfa7w6WKHdAaYhnQpYIUw",
    authDomain: "login-4727e.firebaseapp.com",
    projectId: "login-4727e",
    storageBucket: "login-4727e.firebasestorage.app",
    messagingSenderId: "695121069119",
    appId: "1:695121069119:web:73c8d0274ebe8b384c248a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //inputs

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //submit
  const submit = document.getElementById('submit');
  submit.addEventListner("click",function(event){
    event.preventDefault()


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creeating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("errorMessage")
    // ..
  });
  })

  