import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'components/dashboard/Dashboard';

const Content = () => (
    <div className="content">
        <Switch>
            <Route to="/" exact component={ Dashboard } />
            <Route to="/updates" component={ Dashboard } />
        </Switch>
    </div>
);

export default memo(Content);