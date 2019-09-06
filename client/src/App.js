import React from 'react';
import './App.css';
import axios from "axios"; 
import PlayerCard from './components/PlayerCard';


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
      { this.state.players.map(player => (
       <PlayerCard player={player} key={player.id} /> 
     ))}
    </div>
  )
}
 ;
}

export default App;
