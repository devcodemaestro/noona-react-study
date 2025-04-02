import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 유저는 박스 두 개를 볼 수 있다.
// 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택된다.
// 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 6. 박스 테두리가 결과에 따라 색이 변한다. 이기면 초록색, 지면 빨간색, 비기면 검정색이 보인다.
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <div className="container">
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div>
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
