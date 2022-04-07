import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header, View } from "./Components";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<View view="main" />} />
        <Route path="search" element={<View view="search" />} />
      </Routes>
    </div>
  );
}

export default App;
