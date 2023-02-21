import React from "react";

const MovCard = (props) =>{
//const apiURL = `http://www.omdbapi.com/?i=tt3896198&apikey=7f07872`;

return (

    <div className="card"> 
    
    <div className="poster">
      <img src={props.Poster}/>

    </div>
    <div className="info">

        <p className="title">props.title </p>
        <p className="vote">props.Released</p>
    </div>
    
    </div>
)


}

export default MovCard;