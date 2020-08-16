import React, { memo } from 'react';
import { camelCase } from 'lodash';
import { formatNumber } from 'misc/functions';

interface Props {
    text: string,
    value: number
}

const DataCard = ({ text, value }: Props) => (
    <div className={ "card " + camelCase(text) }>
        <p className="title">{ text }</p>
        <p className="count">{ formatNumber(value) }</p>
    </div>
);

export default memo(DataCard);