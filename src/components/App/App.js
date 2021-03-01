//Core
import React, { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
//Components


//Redux
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

//Components
import Loader from '../Commons/Loader/Loader';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

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
			</Suspense>
		</>
	);
};

export default App;
