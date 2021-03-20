import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import { Route } from "react-router-dom";

function layoutDefault( {component: Component, ...progs} ) {
  return (
    <Route
        {...progs}
        render={ (routeProgs) => {
            <>
                <Header />
                <div className="main">
                    <div className="main__sidebar">
                        <Main />
                    </div>
                    <div className="main__content">
                        <Component {...routeProgs}/>
                    </div>
                </div>
                <Footer />
            </>
        }}
    />
  );
}

export default layoutDefault;
