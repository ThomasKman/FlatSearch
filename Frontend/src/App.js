import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./Components";

const App = () => {
  const [login, setLogin] = useState(true);

  const clickhanler = () => {
    setLogin(!login);
  };

  return (
    <div className="App">
      <Header login={login} />
      <p>{login}</p>
      <button onClick={clickhanler}> LOL press me iks deh</button>
    </div>
  );
};

export default App;
