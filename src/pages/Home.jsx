import searchIcon from "../assets/magnifying-glass.svg"
import houseIcon from "../assets/house.svg"
import filmIcon from "../assets/film-slate.svg"
import monitorIcon from "../assets/monitor.svg"
import trendIcon from "../assets/trend-up.svg"
import plusIcon from "../assets/plus.svg"
import khalifa from "../assets/khalifa.jpg"
import Title from "../assets/khailfa-title.png"

import'./home.css';
import MovieCard from "../components/MovieCard"

function Home() {
  return (

    <div className="netfilx">
      <div className="sidebar">
        <img src={searchIcon}/>
        <img src={houseIcon}/>
        <img src={filmIcon}/>
        <img src={monitorIcon}/>
        <img src={trendIcon}/>
        <img src={plusIcon} />
      </div>
     <div className="main">
      <div className="hero">
        <img src={Title} />
        <p>Rating :7.5/10</p>
        <p>100k streams</p>
        <div className="h-button">
          <button className="b1">PLAY</button>
          <button className="b2">WATCH TRAILER</button>
        </div>
        <div className="h1">
          <h1>Today's Top Picks For You </h1>
        </div>
      </div>
      <MovieCard/>
     </div>
    </div>
  )
}

export default Home