import React, { useState } from 'react';
import Tours from './Components/Tours';
import Data from './data';
import './App.css';

function App() {
  const [state,setState] = useState(Data)
  const DelItem = (id)=>{
    const NewData = state.filter((item)=> item.id !== id)
    setState(NewData)
    console.log(id);
  }
  const Refresh = (a)=>{
    console.log(a);
  }
  return (
    <main>
      <Tours Delfun={DelItem} Ref={Refresh} malumot={state}/>
    </main>
  );
}

export default App;
