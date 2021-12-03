import { Route, Switch } from 'react-router-dom';

import { ReactComponent as MainImage } from 'assets/images/main-image.svg';

import './styles.css';

const Auth = () => {
  return (
    <div className="admin-container">
      <div className="admin-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <MainImage />
      </div>
      <div className="admin-form-container">
        <Switch>
          <Route path="/auth/login">
            <h2>Card Login working</h2>
          </Route>
          <Route path="/auth/recover">
            <h2>Card recovery working</h2>
          </Route>
          <Route path="/auth/signup">
            <h2>Card signup working</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
