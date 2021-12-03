import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

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
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
