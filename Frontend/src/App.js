import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header, View } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <View view="search" />
    </div>
  );
}

export default App;
