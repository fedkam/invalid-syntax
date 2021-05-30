import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { WrittenAppointments } from '../pages/WrittenAppointments';

const Routing = () => (
    <Switch>
        <Route exact path='/' component={WrittenAppointments} />
        <Route path='*' render={() => (<div>404 Страница не найдена.</div>)} />
    </Switch>
)

export default Routing
