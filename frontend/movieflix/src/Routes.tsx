import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth" exact />
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
