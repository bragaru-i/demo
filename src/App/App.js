import React, { Suspense, lazy } from 'react';

import ROUTES, { RenderRoutes } from '../routes';
// import Layout from '../hoc/Layout/Layout';
import LogoSimple from '../UI/LoaderSimple/LoaderSimple';

const Layout = lazy(() => import('../Layout/Layout'));
const App = (props) => {
  return (
    <>
      <Suspense fallback={<LogoSimple />}>
        <Layout>
          <RenderRoutes routes={ROUTES} />
        </Layout>
      </Suspense>
    </>
  );
};

export default App;
