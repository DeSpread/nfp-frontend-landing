import React from 'react';

import {DesktopApp as DesktopAppView,} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <DesktopAppView {...params} />,
  }
];

export default routes;
