import * as React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {LoadableComponent} from './lazy';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/a" render={() => <LoadableComponent />} />
      </Switch>
    </Router>
  );
};
