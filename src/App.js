import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/App.css";
import abe from "./images/abe.webp";
import apu from "./images/apu.webp";
import bart from "./images/bart.webp";
import fatTony from "./images/fat-tony.webp";
import homer from "./images/homer.webp";
import lisa from "./images/lisa.webp";
import lenny from "./images/lenny.webp";
import maggie from "./images/maggie.webp";
import marge from "./images/marge.webp";
import milhouse from "./images/milhouse.webp";
import moe from "./images/moe.webp";
import ned from "./images/ned.webp";
import uniqid from "uniqid";
import background from "./images/background.jpg";
import title from "./images/title.png";

function App() {
  const [clickedCards, setClickedCards] = useState([]);

  const [cards, setCards] = useState([
    {
      src: abe,
      character: "Abe Simpson",
    },
    {
      src: apu,
      character: "Apu N.",
    },
    {
      src: bart,
      character: "Bart Simpson",
    },
    {
      src: fatTony,
      character: "Fat Tony",
    },
    {
      src: homer,
      character: "Homer Simpson",
    },
    {
      src: lisa,
      character: "Lisa Simpson",
    },
    {
      src: lenny,
      character: "Lenny Leonard",
    },
    {
      src: maggie,
      character: "Maggie Simpson",
    },
    {
      src: marge,
      character: "Marge Simpon",
    },
    {
      src: milhouse,
      character: "Milhouse Van Houten",
    },
    {
      src: moe,
      character: "Moe Szyslak",
    },
    {
      src: ned,
      character: "Ned Flanders",
    },
  ]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleCardClicked = (index) => {
    if (!clickedCards.includes(cards[index])) {
      // haven't clicked card before
      console.log("not clicked before");
      logClickedCard(index);
      setScore((prevScore) => prevScore + 1);
    } else {
      // clicked card before
      console.log("clicked before");
      setClickedCards([]);
      setScore(0);
    }
    shuffleCards();
  };

  const shuffleCards = () => {
    setCards((prevCards) => {
      let resultCards = [...prevCards];
      for (let i = resultCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const card = resultCards[i];
        resultCards[i] = resultCards[j];
        resultCards[j] = card;
      }
      return resultCards;
    });
  };

  const logClickedCard = (index) => {
    setClickedCards((prevClickedCards) => [...prevClickedCards, cards[index]]);
    console.log(clickedCards);
  };

  // update high score if current score is higher
  if (score > highScore) {
    setHighScore(score);
  }

  // shuffle cards on startup
  useEffect(shuffleCards, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center cover",
      }}
    >
      <div className="title-container">
        <img src={title} alt="" className="title" />
      </div>
      <div className="scoreboard">
        <div className="score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
      </div>
      <div className="cards-container">
        {cards.map((card, idx) => (
          <Card
            src={card.src}
            character={card.character}
            key={uniqid()}
            shuffleCards={shuffleCards}
            handleCardClicked={handleCardClicked}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
