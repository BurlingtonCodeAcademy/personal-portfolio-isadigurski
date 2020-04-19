import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './Style/index.css';
import App from './Components/App';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Interest from './Components/Interest';
import Contact from './Components/Contact';
import Random from './Components/Random';
import * as serviceWorker from './serviceWorker';

function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={App} />
                <Route path={'/about'} component={About} />
                <Route path={'/portfolio'} component={Portfolio} />
                <Route path={'/interest'} component={Interest} />
                <Route path={'/contact'} component={Contact} />
                <Route path={'/random'} component={Random} />
            </Switch>
        </BrowserRouter>

    )
}

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
