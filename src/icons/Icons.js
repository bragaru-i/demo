import React from 'react';

import User from './svg-to-js/user.js';

import Default from './svg-to-js/default';
import Search from './svg-to-js/search';
import Next from './svg-to-js/next';
import Prev from './svg-to-js/prev';

const Icon = (props) => {
  switch (props.name) {
    case 'user':
      return <User {...props} />;

    case 'search':
      return <Search {...props} />;
    case 'next':
      return <Next {...props} />;
    case 'prev':
      return <Prev {...props} />;

    default:
      return <Default {...props} />;
  }
};
export default Icon;
