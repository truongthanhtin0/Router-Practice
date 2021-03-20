import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import TrangChu from './SideBar/TrangChu';
import NoiDung from './SideBar/NoiDung';
import LienHe from './SideBar/LienHe';
import CaiDat from './SideBar/CaiDat';
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';

import layoutDefault from './layout/layoutDefault';
import { Router, Switch } from "react-router-dom";
import history from './history';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <layoutDefault exact path='/' component={TrangChu}/>
        <layoutDefault exact path='/noidung' component={NoiDung}/>
        <layoutDefault exact path='/lienhe' component={LienHe}/>
        <layoutDefault exact path='/caidat' component={CaiDat}/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
