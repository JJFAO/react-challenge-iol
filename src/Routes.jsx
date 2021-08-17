import Footer from 'components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Character from 'views/Character';
import Favorites from 'views/Favorites';
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

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}
