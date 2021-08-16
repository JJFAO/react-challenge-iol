import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Character from 'views/Character';
import Landing from 'views/Landing';
import NotFound from 'views/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/character/:charId" exact>
          <Character />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
