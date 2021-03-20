import React from 'react';
import SideBar from '../SideBar';
import './style.css';

function Main() {

    const dataListMain = [
        {
            title: 'Trang chủ',
            path: '/'
        },
        {
            title: 'Nội dung',
            path: '/noidung'
        },
        {
            title: 'Liên hệ',
            path: '/lienhe'
        },
        {
            title: 'CaiDat',
            path: '/caidat'
        },
    ];

    const renderDataListMain = () => {
        return dataListMain.map( (itemMain, indexMain) => {
            return(
                <SideBar key={indexMain} itemMain={itemMain} />
            )
        })
    }

  return (
    <ul className="sidebar__list">
        {renderDataListMain()}
    </ul>
  );
}

export default Main;
