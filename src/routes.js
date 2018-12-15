import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Wizard from './component/wizard/Wizard';
import Dashboard from './component/dashboard/Dashboard';


export default(
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/wizard" component={Wizard}/>
    </Switch>
)