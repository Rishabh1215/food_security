import React  from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResearcherView } from './pages/ResearcherView';

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
