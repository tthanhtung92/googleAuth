import './App.css';
import { signInWithGoogle} from "./Firebase"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="login-with-google-btn" onClick={signInWithGoogle} >Sign in with google</button>
        <h1>{localStorage.getItem('name')}</h1>
        <h1>{localStorage.getItem('email')}</h1>
        <img src={localStorage.getItem('profilePicture')} />
      </header>
    </div>
  );
}

export default App;
