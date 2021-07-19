import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basket from "./components/Basket";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
