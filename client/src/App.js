import React from 'react';
import './App.css';
import axios from "axios"; 
import Styled from "styled-components"; 
import PlayerCard from './components/PlayerCard';
import UserForm from "./components/UserForm.js"; 

const Margin = Styled.div`
margin: 20px; 
`

class App extends React.Component { 
constructor() {
  super(); 
  this.state = {
    players: []
  }
}

componentDidMount() {
  this.axiosAPI()
}


axiosAPI = () => {
  axios 
  .get("http://localhost:5000/api/players")
  .then(res => {
    console.log(res.data)
    this.setState({players: res.data})
  })
  .catch(error => {
    console.log("THIS CATCH ERROR", error)
  })
}



render() {
  return (
    <div className="App">
     <h1> Women's World Cup </h1> 
     <h3> Register for more information </h3>
     <UserForm /> 
     <Margin> </Margin>
      { this.state.players.map(player => (
       <PlayerCard player={player} key={player.id} /> 
     ))}
    </div>
  )
}
 ;
}

export default App;
