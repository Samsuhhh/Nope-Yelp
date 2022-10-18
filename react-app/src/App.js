import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import BusinessDetails from './components/Businesses/BusinessDetails';
import AddBusinessReview from './components/Reviews/AddBusinessReview'
import HomeSlider from './components/Businesses/HomePage/imageSlider';
import RecentActivity from './components/Businesses/HomePage/recentActivity';
import BusinessCard from './components/Businesses/BusinessCard/BusinessCard';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setSearch={setSearch}/>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
          <SignUpForm />
          </Route>

          <Route path='/businesses/:businessId'>
          <BusinessDetails/>
          </Route>

          <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} >
        </ProtectedRoute>


        <Route path='/' exact={true}>
          <NavBar />
          <RecentActivity />
          <HomeSlider />
        </Route>
        <Route>
          <BusinessCard search={search} path='/businesses' />
        </Route>

        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>

        <Route path='/writeareview' exact={true}>
          <AddBusinessReview />
        </Route>

      </Switch>


    </BrowserRouter>
  );
}

export default App;
