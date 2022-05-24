import { Route, Routes } from "react-router";
import "./App.css";
import { FullImg } from "./containers/FullImg/FullImg";
import { ListOfCards } from "./containers/ListOfCards/ListOfCards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListOfCards />} />
        <Route path="/image/:id" element={<FullImg />} />
      </Routes>
    </div>
  );
}

export default App;
