import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyBVzogtV3pixZ0ChRdUjUo0ma-jTpbEVlU",
  authDomain: "myproject-b87f8.firebaseapp.com",
  databaseURL: "https://myproject-b87f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myproject-b87f8",
  storageBucket: "myproject-b87f8.appspot.com",
  messagingSenderId: "92021122220",
  appId: "1:92021122220:web:68edd7153cf545e90dab09"
};
 
const app = initializeApp(firebaseConfig);
 
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
const database = getDatabase(app);
 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
const auth = getAuth();
