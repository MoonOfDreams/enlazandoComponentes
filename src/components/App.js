import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <React.Fragment>
      <Router>
        <div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
