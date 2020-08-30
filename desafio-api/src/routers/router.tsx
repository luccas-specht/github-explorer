import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ClientDetails, Login, ClientsList } from '../ui/pages';

export const Routes: React.FC = () => (
    <Switch>

        {/* publics here */}
        <Route path='/' component={Login} exact />
        <Route path='/login' component={Login} exact />


        {/* privates here */}
        <Route path='/client' component={ClientDetails} exact />
        <Route path='/client/:id' component={ClientsList} exact />
    </Switch>
);