import { Route, Routes } from "react-router-dom";
import ROUTES from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {ROUTES.map((element) => {
          return <Route key={element.name} {...element} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
