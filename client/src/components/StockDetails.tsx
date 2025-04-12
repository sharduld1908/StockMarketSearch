import React from 'react';
import './StockDetails.css';
import ToggleStar from './ToggleStar';

interface StockDetailsProps {
  stockSymbol: string;
}

const StockDetails: React.FC<StockDetailsProps> = ({ stockSymbol }) => {
  return (
    <div className="stock-details">
        <div className="stock-details-header">
            <div className="side-box left box">
                <div className='side-box-firstline'>
                    <h1>{stockSymbol} </h1>
                    <ToggleStar/>
                </div>
            </div>
            <div className="center-box box">

            </div>
            <div className="side-box right box">

            </div>
        </div>
        <div className='stock-details-tabs big-box'>

        </div>
    </div>
  );
};

export default StockDetails;