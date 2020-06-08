import React, {useState} from "react";
import './App.css';
import Tweet from "./Tweet";

function App() {

  const [users, setUsers] = useState([
    {name: 'Maria Antônia', message: 'Hoje tem forró mais tarde'},
    {name: 'José da Silva', message: 'Tá calor hoje'},
    {name: 'Pedro Barbora', message: 'bom dia xD'}
  ]);

  return (
    <div className="app">
      {
        users.map(user => {
          return <Tweet name={user.name} message={user.message}/>
        })
      }
    </div>
  );
}

export default App;
