import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: HomePage },
  {
    path: '/page-a',
    key: 'Page-A',
    component: RenderRoutes,
    routes: [
      {
        path: '/',
        key: 'PAGE-A_ROOT',
        exact: true,
        component: () => <h1>Page-A index</h1>,
      },
      {
        path: '/page-a/temp1',
        key: 'PAGE-A_TEMP1',
        exact: true,
        component: () => <h1>Page-A/ temp1</h1>,
      },
      {
        path: '/page-a/temp2',
        key: 'PAGE-A_TEMP1',
        exact: true,
        component: () => <h1>Page-A/ temp2</h1>,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default ROUTES;
