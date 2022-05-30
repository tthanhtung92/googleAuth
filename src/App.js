import "./App.css";
import { signInWithGoogle } from "./Firebase";
import GoogleButton from "react-google-button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleButton onClick={signInWithGoogle}></GoogleButton>
        <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("profilePicture")} />
      </header>
    </div>
  );
}

export default App;
