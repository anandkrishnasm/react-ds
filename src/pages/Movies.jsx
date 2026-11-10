import MainTitle from "../assets/khailfa-title.png"
import Plus from "../assets/add-circle-line.svg"
import Like from "../assets/thumb-up-line.svg"
import Moviecard from "../components/MovieCard"
import"./movies.css"

function Movies() {
  return (
    <div className="m-section">
       <div className="m-hero">
        <img src={MainTitle}/>
        <div className="m-hero-button">
          <button className="ply">Play</button>
          <div className="special">
            <button><img src={Plus}/></button>
            <button><img src={Like}/></button> 
          </div>
        </div>
       </div>
       <div className="content">
        <div className="side1">
          <p>A man becomes entangled in a complex world of revenge, heritage and influence amid gold smuggling operations.• The Ordinary Beginning: The story follows Aamir Ali (Prithviraj Sukumaran), a young, carefree textile shop owner living a quiet life in Kerala with his parents (played by Mohini and Renji Panicker). He shares a lighthearted romance with Fiza (Malvika Sharma).
• The Family Crisis & Smuggling Legacy: Aamir's life takes a sharp turn when his businessman father falls into a severe financial and legal crisis caused by corrupt politicians and heavy debt. As secrets of the past unravel, Aamir discovers that his family has a deep-rooted, dangerous history tied to the gold-smuggling underworld—specifically connected to his grandfather, Mambarakkal Ahmed Ali (played in a special appearance by Mohanlal).
• Entering the Underworld: Forced to abandon his peaceful life to save his family and honor his father's debts, Aamir steps into the complex, high-stakes world of international gold smuggling.
• Conflict and Power Struggle: Aamir navigates rival cartels, dangerous antagonists like Harris Basheer (Neil Nitin Mukesh), and custom investigations, transforming from a simple textile merchant into a calculated syndicate kingpin as he fights for survival, heritage, and retribution</p>
        </div>
        <div className="side2">
          <div className="cast">
            <h1>Cast :</h1><p>Prithviraj Sukumaran ,Neil Nitin Mukesh,Suresh Oberoi ,Malvika Sharma ,Sanju Sivram ,Mohanlal ,Tovino Thomas,Soubin Shahir </p>
          </div>
          <div className="genre">
            <h1>Genre</h1><p>Action, Crime, Thriller, and Drama</p>
          </div>
        </div>
       </div>
       <Moviecard/>
    </div>
  ) 
}

export default Movies
