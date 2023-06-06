import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import { app } from './firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();


function App() {
  
  const [user, setUser] = useState(null);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
      console.log(loggedInUser);
    })
    .catch(err => {
      console.log('error', err);
    })
  }

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
      console.log(loggedInUser);
    })
    .catch(err => {
      console.log('error', err);
    })
  }
  
  const handleSignOut = () => {
    const authz = getAuth();
    signOut(authz)
    .then()
    .catch(err => {
      console.log('sign out', err)
    })
  }


  return (
    <div className="App">
      <h1>Firebase + React</h1>

      <div className="card">


      <button onClick={handleGoogleLogin}>Login With Google</button>
      <button onClick={handleTwitterLogin}>Login With Twitter</button>

      <button onClick={handleSignOut}>Sign Out</button>


      </div>

      {user &&
        <div className='card'>
            <h4>User: {user.displayName}</h4>
        </div>
      }


    </div>
  )
}

export default App
