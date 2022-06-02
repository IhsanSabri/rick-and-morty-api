import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Episodes from "./components/Episode/Episodes";
import CharactersDetails from "./components/Character/CharactersDetails";
import EpisodeDetails from "./components/Episode/EpisodeDetails";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Character from "./components/Character/Character";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/episodes">
          <Episodes />
        </Route>
        <Route exact path="/character">
          <Character />
        </Route>
        <Route
          exact
          path="/episode/:episodeID"
          children={<EpisodeDetails />}
        ></Route>
        <Switch>
          {["/character/:characterID", "/episode/character/:characterID"].map(
            (path, id) => (
              <Route exact path={path} key={id} children={<CharactersDetails />} />
            )
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
