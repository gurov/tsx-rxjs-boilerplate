import * as React from 'react';
import { Link, match, Route } from 'react-router-dom';

export class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div>HOME</div>
                <div><Link to="/details/typescript">Search for books by "typescript"</Link></div>
            </div>);
    }
}