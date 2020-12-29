import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Impressum from './Impressum';

class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/impressum' component={Impressum}></Route>
            </Switch>
        )
    };
}

export default Main;