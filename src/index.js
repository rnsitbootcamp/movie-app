import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import NotFound from './components/NotFound/NotFound';
import MovieDetail from './components/MovieDetails/MovieDetail';

import './sass/global.scss';

const Root = () => {
	const { store, persistor } = configureStore();
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={App} />
						<Route path="/movie/:title" component={MovieDetail} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

render(<Root />, document.getElementById('root'));
serviceWorker.register();
