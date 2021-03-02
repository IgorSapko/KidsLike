//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';
//Components
import Footer from '../../pages/Footer';


//Redux
import { useDispatch } from 'react-redux';
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

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (location.search) {
			const params = queryString.parse(location.search);

			params.token && dispatch(authOperations.userSignInGoogle(params.token));
		}

		dispatch(authOperations.getCurrentUser());
	}, [dispatch, location.search]);

	return (
		<>
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
