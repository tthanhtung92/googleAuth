// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_UHoiZH-PQ3dhUIfGB5dw5Nuyxt3M9DI",
  authDomain: "auth-5a17f.firebaseapp.com",
  projectId: "auth-5a17f",
  storageBucket: "auth-5a17f.appspot.com",
  messagingSenderId: "824621953921",
  appId: "1:824621953921:web:7c8dfea643154db768ae80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePicture = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePicture", profilePicture);
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
};
