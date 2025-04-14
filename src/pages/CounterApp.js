import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import counterStore from "store/counterStore";

function CounterApp() {
  const { count, increase, decrease, increaseBy, decreaseBy } = counterStore();
  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={increase}> 1 증가</button>
      <button onClick={() => increaseBy(10)}>10 증가</button>
      <button onClick={decrease}>1 감소</button>
      <button onClick={() => decreaseBy(10)}>10 감소</button>
    </>
  );
}

export default CounterApp;
