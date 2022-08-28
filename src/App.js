import "./App.css";
import Home from "./components/Home";
import Event from "./components/Event";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
