import React from 'react';
import { Route } from 'react-router-dom';
import simple1 from '../page/simple1/simpl1'
import simple2 from '../page/simple2/simpl2'

const routes = [
      {
    path: '/',
    component: simple1,
    key: '/',
  },
  {
    path: '/simple1',
    component: simple1,
    key: '/simple1',
  },
  {
    path: '/simple2',
    component: simple2,
    key: '/simple2',
  }
];

function RoutingList() {
  return routes.map(item => {
    console.log('item',item.path.split('/'),item,item.path.split('/').length)
    if (item.path.split('/').length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }

    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}

export default RoutingList;
