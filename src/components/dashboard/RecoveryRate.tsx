import React, { memo } from 'react';

interface Props {
    totalCases: number,
    totalRecovered: number
}

const RecoverRate = ({totalCases, totalRecovered}: Props) => {
    const percentage: number = (totalRecovered * 100) / (totalCases !== 0 ? totalCases : 1);
    const roundedPercentage: number = Math.round(percentage * 10) / 10;

    return (
        <div className="recoveryRate">
            <h3>Ratio of Recovery</h3>

            <div className="bottom">
                <p className="numberText">{ 308.55 } Affected</p>
                <p className="numberText">{ 100.3 } Recovered</p>
            </div>
        </div>
    );
};

export default memo(RecoverRate);