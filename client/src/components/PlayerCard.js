import React from "react"; 

 function PlayerCard(props)  {
    console.log(props)

    return(
        <>
        <h2> 2019 Player </h2>
        <div> Name: { props.player.name } </div>
        <div> Country: { props.player.country } </div>
        </> 
    )
}

export default PlayerCard; 