//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';
//Components
import Header from '../Commons/Header/Header';
import Footer from '../Commons/Footer/Footer';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';


//Components
import Loader from '../Commons/Loader/Loader';

import queryString from 'query-string';

const App = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const user = useSelector(state => state.auth.user);

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (location.search) {
			const params = queryString.parse(location.search);

			params.token && dispatch(authOperations.userSignInGoogle(params.token));
		}
		dispatch(authOperations.getCurrentUser());
	}, []);

	return (
		<>
			<Header />
			<Suspense fallback={<Loader onLoad={true} />}>
				<Switch>
					{routes.map(route =>
						route.private ? (
							<PrivateRoute key={route.path} {...route} />
						) : (
							<PublicRoute key={route.path} {...route} />
						),
					)}
				</Switch>
				<Footer />
			</Suspense>
		</>
	);
};

export default App;
