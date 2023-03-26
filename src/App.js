import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ImportData } from "./pages/ImportData";
import { ResearcherView } from "./pages/ResearcherView";
import { GovtRepresentative } from "./pages/GovtRepresentative";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ResearcherView} />
        <Route path="/import" exact component={ImportData} />
        <Route
          path="/govtrepresentative"
          exact
          component={GovtRepresentative}
        />
      </Switch>
    </Router>
  );
}

export default App;
