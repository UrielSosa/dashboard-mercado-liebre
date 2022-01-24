import React from 'react';
import Sidebar from './Sidebar';
import Search from './Search';
import NotFound from './NotFound';
import Last from './Content/Cards/Last';
import Metrics from './Content/Metrics';
import Tables from './Content/Tables';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <Switch>
                <Route exact path="/">
                    <Content />
                    <Footer />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/last">
                  <Last />
                </Route>
                <Route path="/metrics">
                  <Metrics />
                </Route>
                <Route path="/tables">
                  <Tables />
                </Route>
                <Route component={NotFound} />
              </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
