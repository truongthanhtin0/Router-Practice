import React from 'react';
import './style.css';

import history from '../history';

function SideBar(progs) {
  
    const {itemMain} = progs;

  return (
    <li className="sidebar__list--item" onClick={() => history.push(itemMain.path)}>
        {itemMain.title}
    </li>
  );
}

export default SideBar;
