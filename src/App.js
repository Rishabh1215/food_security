import React  from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MacroEconomic from './pages/MacroEconomic';
// import {
//   Agricultural,
//   ReportsOne,
//   ReportsTwo,
//   ReportsThree,
// } from './pages/Agricultural';
// import Team from './pages/Team';
import { ImportData } from './pages/ImportData';
import { ResearcherView } from './pages/ResearcherView';
import { GovtRepresentative } from './pages/GovtRepresentative';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/macroeconomic" exact component={MacroEconomic} /> */}
        {/* <Route path="/agricultural" exact component={Agricultural} /> */}
        {/* <Route
          path="/agricultural/agricultural1"
          exact
          component={ReportsOne}
        />
        <Route
          path="/agricultural/agricultural2"
          exact
          component={ReportsTwo}
        />
        <Route
          path="/agricultural/agricultural3"
          exact
          component={ReportsThree}
        /> */}
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
