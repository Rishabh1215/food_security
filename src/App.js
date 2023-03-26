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
      </Switch>
    </Router>
  );
}

export default App;
