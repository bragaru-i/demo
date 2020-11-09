import React from 'react';

const Layout = (props) => {
  return (
    <>
      <div>
        Main Navigation goes here and stuff like that
        {/* Here goes main Navigation, footer and so on */}
        {props.children}
        Footer goes here
      </div>
    </>
  );
};

export default Layout;
