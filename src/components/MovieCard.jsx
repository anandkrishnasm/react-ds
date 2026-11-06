import React from 'react'
import img1 from "../assets/mollywood.jpg"
import img2 from "../assets/spiderman.jpg"
import img3 from "../assets/michael.jpg"
import img4 from "../assets/doomday.webp"
import img5 from "../assets/fightclub.jpg"
import img6 from "../assets/jana.jpg"
import "./moviecard.css"

function MovieCard({Mtitle}) {
  return (
    <div> 
      <h1 className="title">{Mtitle}</h1>
      <div className="list">
       <img src={img1} />
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
      <img src={img6}/>
    </div>
    </div>
    
    
  )
}

export default MovieCard