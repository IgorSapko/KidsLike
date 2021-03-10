import React, { Suspense, useEffect } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Commons/Header/Header';
import Footer from '../Commons/Footer/Footer';
import Loader from '../Commons/Loader/Loader';
import authOperations from 'redux/auth/authOperations';
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';
import selectors from '../../redux/selectors'
import queryString from 'query-string';

const App = () => {

	const dispatch = useDispatch();
	const location = useLocation();
	const isLoading = useSelector(selectors.getIsLoading)

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

	return (<>{!isLoading?
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
		</>:<Loader onLoad={true} />}</>
	);
};

export default App;
