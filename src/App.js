import {useState} from 'react'
import Home from './Home'
import Profile from './Profile'
import './App.css';

function App() {
  const [state, setstate] = useState({name:'Tehman'})

  const changeName = names=>{
    setstate({name:names})
  }
  return (
    <div className="App">
      <Profile name={state} />
      <Home changeName={changeName} name={state} />
    </div>
  );
}

export default App;
