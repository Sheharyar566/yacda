import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

interface Props {
    card: string
}

const Extrascard = ({ card }: Props) => {
    return <div className={ 'extrasCard ' + card.toLowerCase() + 'Card' }>
        <div className="extrasImage"></div>

        <div className="details">
            <Link to={ '/' + card } className="extrasButton">{ card }</Link>
            <p className="extrasHeadline">{ card === 'Updates' ? '5 Symptoms of CoronaVirus You Should Know' : 'Donate 3rd World Countries Which Are Suffering' }</p>
            { card === 'Updates' ? 
                <Link className='readMore' to='/symptoms'>Read More <BsArrowRight /></Link> :
                <Link className='readMore' to='/donate'>Donate Here <BsArrowRight /></Link> }
        </div>
    </div>;
};

export default memo(Extrascard);