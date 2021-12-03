import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Auth from 'pages/Auth';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth" exact />
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth">
        <Auth />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
