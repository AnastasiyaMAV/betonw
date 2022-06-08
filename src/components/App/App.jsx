import React from 'react';

import Header from '../Header/Header';
import RoutesMenu from '../RoutesMenu/RoutesMenu';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <RoutesMenu />
      </main>
      <Footer />
    </>
  );
}

export default App;
