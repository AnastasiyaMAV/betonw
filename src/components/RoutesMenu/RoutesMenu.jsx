import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from '../Pages/Home/Home';
import Price from '../Pages/Price/Price';
import Feedback from '../Pages/Feedback/Feedback';

function RoutesMenu() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home />}
      />

      <Route
        exact
        path="/price"
        element={<Price />}
      />

      <Route
        exact
        path="/contacts"
        element={<Feedback />}
      />

      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default RoutesMenu;
