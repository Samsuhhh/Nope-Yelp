import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import UpdateBusinessReview from './components/Reviews/UpdateBusinessReview';
import BusinessReview from './components/Reviews/BusinessReviews';
import CurrentUserReviews from './components/Reviews/CurrentUserReviews';
import BusinessCard from './components/Businesses/BusinessCard/BusinessCard';
import AddBusiness from './components/Businesses/AddBusiness';
import Carousel, { CarouselItem } from './components/Businesses/BusinessDetails/Carousel';
import BusinessNavBar from './components/Businesses/BusinessDetails/Carousel/BusinessNavBar/BusinessNavBar';
import CreateBusiness from './components/Businesses/CreateBusiness';
import UpdateBusiness from './components/Businesses/UpdateBusiness';
import UserProfile from './components/UserProfile';
import BusinessImages from './components/Businesses/BusinessImages';
import AddBusinessImage from './components/Businesses/AddBusinessImage';
import CurrentUserBusinesses from './components/Businesses/CurrentUserBusinesses';

import Maps from './components/Maps/Maps';
function App() {
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState([])
  const singleBusiness = useSelector(state => state.businesses.singleBusiness)
  const dispatch = useDispatch();
  // const reviews = useSelector(state => state.reviews.business)

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

          <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
          <User />

          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} >
        </ProtectedRoute> */}


        <Route path='/' exact={true}>
          <NavBar setSearch={setSearch} />
          <RecentActivity />
          <HomeSlider />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>

        <Route path='/businesses/new' exact={true}>
          <AddBusiness />
        </Route>

        <Route path='/businesses/:businessId/images' exact={true}>
          <BusinessImages></BusinessImages>
        </Route>

        <Route path='/businesses/:businessId/images/new' exact={true}>
          <AddBusinessImage></AddBusinessImage>
        </Route>

        <Route path='/createabusiness' exact={true}>
          <CreateBusiness />
        </Route>

        <Route search={search} path='/businesses/:businessId' exact={true}>
          <BusinessNavBar setSearch={setSearch} />
          <BusinessDetails />
        </Route>

        <Route path='/reviews/:reviewId/edit' exact={true}>
          <UpdateBusinessReview />
        </Route>

        <Route path='/businesses/:businessId/writeareview' exact={true}>
          <AddBusinessReview />
        </Route>

        <Route path='/businesses/:businessId/updatebusiness' exact={true}>
          <UpdateBusiness/>
        </Route>

        <Route exact path='/user-profile/businesses' >
          <BusinessNavBar setSearch={setSearch} />
          <UserProfile />
          <CurrentUserBusinesses />
        </Route>

        <Route exact path='/user-profile/reviews' >
          <BusinessNavBar setSearch={setSearch} />
          <UserProfile />
          <CurrentUserReviews />
        </Route>

        <Route path='/businesses'>
          <BusinessNavBar setSearch={setSearch} />
          <BusinessCard search={search}  exact={true} />
        </Route>

        <Route exact path="/maps">
          <Maps />
        </Route>


      </Switch>


    </BrowserRouter>
  );
}

export default App;
