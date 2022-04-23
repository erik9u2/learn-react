import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeToRed, resetToDefault } from "../../features/header/headerSlice";

function Header() {
  const [count, setCount] = useState(0);
  const style = useSelector((state) => state.header.style);
  const dispatch = useDispatch();

  function handleClick() {
    setCount(count + 1);
    if (count % 2 === 0) {
      dispatch(changeToRed());
    } else {
      dispatch(resetToDefault());
    }
  }

  return (
    <header>
      <h1 style={style}>Sample app {count}</h1>
      <button onClick={handleClick}>Lets see if I'm reactive</button>
      {count >= 3 && <p>Woooohooo!!! You clicked at least 3 times!</p>}
    </header>
  );
}

export default Header;
