import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Link, match, Route } from 'react-router-dom';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/dom/ajax';
import './index.css';
import { Home } from "./components/Home";
import { Details } from "./components/Details";


ReactDOM.render(
    <Router>
        <div>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/details/:id"
                   component={(props) => <Details required="some string" {...props} />}/>
        </div>
    </Router>,
    document.getElementById('root')
);