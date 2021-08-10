import "./index.css";
import { Router, Route, Switch } from "react-router-dom";
import Basket from "./components/Basket";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import ItemPage from "./components/ItemPage";
import history from "./history";
import DeliveryForm from "./components/DeliveryForm";
import OrderCompleted from "./components/OrderCompleted";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />

        <Switch>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>

          <Route path="/item/:id" exact component={ItemPage} />
          <Route path="/delivery" exact component={DeliveryForm} />
          <OrderCompleted />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
