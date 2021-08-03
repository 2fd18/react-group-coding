import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Learn from "./Learn";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" exact component={Learn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
