import React from "react"; 

 function PlayerCard(props)  {
    console.log(props)

    return(
        <>
        <div> Name: { props.player.name } </div>
        <div> Country: { props.player.country } </div>
        </> 
    )
}

export default PlayerCard; 