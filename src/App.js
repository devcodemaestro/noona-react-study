import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 유저가 가위, 바위, 보 버튼 클릭시 컴퓨터는 랜덤하게 선택이 되어야 한다.
// 게임의 결과가 맞게 나와야 한다 (이김, 짐, 비김이 각 카드에 유저와 컴퓨터 각자의 입장에 맞게 나와야함)
// 결과에 따라 다른 테두리색을 보여줘야한다 (예: 이김-초록, 짐-빨감, 비김- 회색)
const choice = {
  rock: {
    name: "rock",
    img: `${process.env.PUBLIC_URL}/images/rock.svg`,
  },
  scissors: {
    name: "scissors",
    img: `${process.env.PUBLIC_URL}/images/scissors.svg`,
  },
  paper: {
    name: "paper",
    img: `${process.env.PUBLIC_URL}/images/paper.svg`,
  },
};

const defaultSelect = {
  img: `${process.env.PUBLIC_URL}/images/question-mark.svg`,
};

function App() {
  const [userSelect, setUserSelect] = useState(defaultSelect);
  const [computerSelect, setComputerSelect] = useState(defaultSelect);
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let userResult = judgement(choice[userChoice], computerChoice);
    let computerResult = judgement(computerChoice, choice[userChoice]);
    setResult(userResult);
    setComputerResult(computerResult);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let idx = itemArray[randomItem];
    return choice[idx];
  };

  const judgement = (userA, userB) => {
    if (userA.name === userB.name) {
      return "Tie";
    } else if (userA.name === "rock") {
      return userB.name === "scissors" ? "Win" : "Lose";
    } else if (userA.name === "scissors") {
      return userB.name === "paper" ? "Win" : "Lose";
    } else if (userA.name === "paper") {
      return userB.name === "rock" ? "Win" : "Lose";
    }
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="btn-container">
        <button onClick={() => play("scissors")} className="btn">
          가위
        </button>
        <button onClick={() => play("rock")} className="btn">
          바위
        </button>
        <button onClick={() => play("paper")} className="btn">
          보
        </button>
      </div>
    </div>
  );
}

export default App;
