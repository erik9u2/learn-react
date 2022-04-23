import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { addFive, increment } from "./features/counter/counterSlice";

function App() {
  let aClassName = "abc";
  let someText = "this is some text";
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  // const [count, setCount] = useState(0);

  function handleClick() {
    // setCount(count + 1);
    dispatch(increment());
    console.log("hello world");
  }

  function handleFiveClick() {
    dispatch(addFive());
  }

  return (
    <div className={aClassName}>
      {someText} {count}
      <button onClick={handleClick}>Meeeh, needed some text</button>
      <button onClick={handleFiveClick}>Lets add five</button>
      {count === 0 ? <p>Click the button dude!</p> : <p>Oh yea!!</p>}
      {count === 0 ? <Header /> : ""}
      <Content />
      <Footer text={someText} />
    </div>
  );
}

export default App;
