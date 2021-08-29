import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Character from './views/Character';
import Favorites from './views/Favorites';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Footer from './components/Footer';

export default function Routes() {
  return (
    <Router>
      <div className="footer-fix">
        <Switch>
          <Route path="/" exact>
            <Home />
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

        <div className="mt-auto">
        <Footer />
        </div>
      </div>
    </Router>
  );
}
