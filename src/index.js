import React from "react";
import ReactDOM from "react-dom";
import useScroll from "./useScroll";
import "./styles.css";

function App() {
  const h1 = useScroll(300, 500);
  const h2 = useScroll(800, 900);
  return (
    <div className="App">
      {h1 ? <h1>Hello CodeSandbox</h1> : "o"}
      {h2 ? <h2>Start editing to see some magic happen!</h2> : "lol"}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
