import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaVial } from 'react-icons/fa';
import { FiMap, FiHeadphones } from 'react-icons/fi';
import { GiLungs } from 'react-icons/gi';
import { RiNewspaperLine, RiEqualizerLine } from 'react-icons/ri';

interface Props {
    text: string
}

const MenuItem = ({ text }: Props) => {
    return (<NavLink className="menuItem" to={ text === 'Dashboard' ? '/' : '/' + text.toLowerCase()}>
        { text === 'Dashboard' && <MdDashboard /> }
        { text === 'Maps' && <FiMap /> }
        { text === 'Symptoms' && <GiLungs /> }
        { text === 'Updates' && <RiNewspaperLine /> }
        { text === 'Test' && <FaVial /> }
        { text === 'Support' && <FiHeadphones />}
        { text === 'Settings' && <RiEqualizerLine /> }

        <span className="itemLink">{ text }</span>
    </NavLink>
    );
};

export default memo(MenuItem);