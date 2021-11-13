import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

function App(){
  const local = "contacts";
  let [info,setInfo] = useState([]);

  useEffect(() => {
    let retrive = JSON.parse(localStorage.getItem(local))
    if(retrive){setInfo(retrive)}
  },[])

  useEffect( () => {
      localStorage.setItem(local,JSON.stringify(info))
    },
    [info]
  );

  const addContact = (name,email) => {
      setInfo([...info,{id:info.length+1,name:name,email:email}]);
  }

  const removeContact = (id) => {
    let filter = info.filter((con) => {
      return con.id !== id;
    })
    setInfo(filter);
  }

  return (
    <div className="App container">
        <Header></Header>
        <Form add={addContact}></Form>
        <Contact data = {info} remove={removeContact}></Contact>
    </div>
  );
}

export default App;
