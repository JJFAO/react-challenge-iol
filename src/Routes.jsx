import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from 'views/Landing';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}
