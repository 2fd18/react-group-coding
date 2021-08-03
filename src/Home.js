import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Nav.js";
import Box from "./box.js";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body>
        <Box name="This is something exciting" />
        <Box name="This is something not exciting" />
      </body>
    </div>
  );
}

export default Home;
