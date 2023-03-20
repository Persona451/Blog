import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hello from "./components/Hello/Hello";
import Hobby from "./components/Hobby/Hobby";

function App() {
  const [counterLeft, setCounterLeft] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  const [counterHistory, setCounterHistory] = useState('')

  const clickLeft = () => {
    setCounterLeft(counterLeft + 1,)
    setCounterHistory(counterHistory + 'R, ')
  }
  const clickRight = () => {
    setCounterRight(counterRight + 1)
    setCounterHistory(counterHistory + 'L, ')
  }

  // const handleClick = () => {
  //   setCounter(counter + 1)
  // }
  // const handleClickMin = () => {
  //   setCounter(counter - 1)
  // }
  // const handleClickNull = () => {
  //   setCounter(0)
  // }
  return (
    <div className="App">
      <Header />
      <p style={{fontSize: '60px'}}>Клик левой кнопки {counterLeft} </p>
      <p style={{fontSize: '60px'}}>Клик правой кнопки {counterRight} </p>
      <button onClick={clickLeft}>Клик левой</button>
      <button onClick={clickRight}>Клик правой</button>
      <h1>История кликов {counterHistory} </h1>
      <Hello name="Arsen" age="25" />
      <Hobby hobbies="Football, Boxing" />
      <Hello name="Kenan" age="23" />
      <Hobby hobbies="Sleep, CS-GO" />
      <Hello name="Kairat" age="17" />
      <Hobby hobbies="Engish, GYM" />
      <Footer />
    </div>
  );
}
export default App;

// Декомпозиция - разделение кода компонента