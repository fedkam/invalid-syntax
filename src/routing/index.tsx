import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { WrittenAppointments } from '../pages/WrittenAppointments';

export const Routing = () => (
    <Switch>
        <Route exact path='/visit-doctor' component={WrittenAppointments} />
        <Route path='*' render={() => (<div>404 Страница не найдена.</div>)} />
    </Switch>
);
