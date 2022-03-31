
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState({});


  return (
    <div className="App">
      <Signup user={user} setUser={setUser}/>
      <Login user={user} setUser={setUser}/>
    </div>
  );
}

export default App;
