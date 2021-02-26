import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Warsztaty from "./pages/Warsztaty";
import Video from "./pages/Video";
// import ReactGa from "react-ga";

function App() {
  // useEffect(() => {
  //   ReactGa.initialize("G-G-J3ZS0WNQ7Q");
  //   ReactGa.pageview(window.location.pathname + window.location);
  // }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <Switch>
          <Route path="/video" component={Video} />
          <Route path="/Warsztaty" component={Warsztaty} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
