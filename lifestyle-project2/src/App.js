import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import SearchBar from "./Components/SearchBar/SearchBar"
import WorkoutData from "./WorkoutData.json"


function App() {
  const APICall = () =>{
    fetch ('https://wger.de/api/v2/')
  
  .then(res => {console.log(res.json())})
}
  return (
    <div>
       <button onClick = {APICall}>button</button>
       <SearchBar data={WorkoutData.json}/> 
    </div>
  );
}

export default App;

//cc0113a06f599c529f0a7d4ca591fbf99c233c9a