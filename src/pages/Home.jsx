import searchIcon from "../assets/magnifying-glass.svg"
import houseIcon from "../assets/house.svg"
import filmIcon from "../assets/film-slate.svg"
import monitorIcon from "../assets/monitor.svg"
import trendIcon from "../assets/trend-up.svg"
import plusIcon from "../assets/plus.svg"
import'./home.css';

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
    </div>
  )
}

export default Home