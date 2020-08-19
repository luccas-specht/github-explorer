import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, Repository } from '../pages';

export const Routes: React.FC = () => (
    <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/repository' component={Repository} exact />
    </Switch>
)