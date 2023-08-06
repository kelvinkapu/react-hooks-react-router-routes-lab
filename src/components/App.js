import React from "react";
import { Route,} from "react-router-dom";
// import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*/}
  <Route path="/">
  <Home />
  <Movies/>
  <Directors/>
  <Actors/>
  <Home/>
</Route>
  
  </div>;
}

export default App;
