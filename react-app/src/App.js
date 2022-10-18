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

import BusinessReview from './components/Reviews/BusinessReviews';

import BusinessCard from './components/Businesses/BusinessCard/BusinessCard';
import AddBusiness from './components/Businesses/AddBusiness';


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
      <Switch>
      {/* <NavBar setSearch={setSearch}/>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/businesses/:businessId/reviews' exact={true}>
          <BusinessReview></BusinessReview>
        </Route>

        <Route path='/businesses/:businessId'>
          <BusinessDetails />
        </Route>



        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />

          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} >
        </ProtectedRoute> */}



        <Route path='/' exact={true}>
          <NavBar setSearch={setSearch}/>
          <RecentActivity />
          <HomeSlider />
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

        <Route path='/businesses/new' exact={true}>
          <AddBusiness />
        </Route>

        <Route>
          <BusinessCard search={search} path='/businesses' exact={true}/>
        </Route>



      </Switch>


    </BrowserRouter>
  );
}

export default App;
