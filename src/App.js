import logo from './logo.svg';
import './App.css';
import Person from './Person';
import { useState } from 'react';

function App() {
  const [profil, setProfil] = useState(false);
  return (
    <div className="App">
     <h1>My Profile</h1>
     <button onClick={() => setProfil(!profil)}>
        {profil ? " Return Profil" : "show profil"}
      </button>
      {profil && <Person/>}
     
    </div>
  );
}

export default App;
