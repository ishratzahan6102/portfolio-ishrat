import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabr from '../Shared/Navabr';

const Main = () => {
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;