import React, { memo } from 'react';
import 'components/menu/Sidebar.scss';

import { ReactComponent as Logo } from 'assets/images/virus.svg';
import MenuItem from 'components/menu/MenuItem';

const Sidebar = () => (
    <div className="sidebar">
        <Logo className="logo" />

        <div className="menu">
            <MenuItem text="Dashboard" />
            <MenuItem text="Maps" />
            <MenuItem text="Updates" />
            <MenuItem text="Symptoms" />
            <MenuItem text="Test" />
            <MenuItem text="Support" />
            <MenuItem text="Settings" />
        </div>

        <div className="status">

        </div>
    </div>
);

export default memo(Sidebar);