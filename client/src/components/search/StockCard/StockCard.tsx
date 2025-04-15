import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Star } from 'lucide-react'; // Assuming you're using phosphor-react for the star icon
import './StockCard.css';

interface StockCardProps {
  stockSymbol: string;
}


const stockData = {
  symbol: "AAPL",
  name: "Apple Inc",
  exchange: "NASDAQ NMS - GLOBAL MARKET",
  price: 181.59,
  change: 0.03,
  changePercent: 0.02,
  timestamp: "2024-02-21 10:27:39",
  marketStatus: "Open",
  highPrice: 182.89,
  lowPrice: 181.06,
  openPrice: 181.61,
  prevClose: 181.56,
  ipoDate: "1980-12-12",
  industry: "Technology",
  website: "https://www.apple.com/",
  peers: ["AAPL", "DELL", "SMCI", "HPQ", "HPE", "NTAP", "WDC", "PSTG", "XRX"]
};

// Mock chart data
const hourlyData = [
  { time: "09:00", price: 181.2 },
  { time: "10:00", price: 181.1 },
  { time: "11:00", price: 181.4 },
  { time: "12:00", price: 182.0 },
  { time: "13:00", price: 181.0 },
  { time: "14:00", price: 180.8 },
  { time: "15:00", price: 181.2 },
  { time: "16:00", price: 180.9 },
  { time: "17:00", price: 181.3 },
  { time: "18:00", price: 181.7 },
  { time: "19:00", price: 181.5 },
  { time: "20:00", price: 181.4 },
  { time: "21:00", price: 181.59 }
];


const StockCard: React.FC<StockCardProps> = ({ stockSymbol }) => {
  const [favorite, setFavorite] = useState(false);

  const minPrice = Math.floor(Math.min(...hourlyData.map(d => d.price)) * 10) / 10;
  const maxPrice = Math.ceil(Math.max(...hourlyData.map(d => d.price)) * 10) / 10;


  return (
    <>
      <div className="stock-card">
        
        {/* Card Header */}
        <div className="card-header">
          <div className='stock-info'>

            {/* Line 1 */}
            <div className="stock-symbol-star">
              {/* Ticker */}
              <h1 className="stock-symbol">{stockSymbol}</h1>
            
              {/* Fav Star */}
              <button 
                onClick={() => setFavorite(!favorite)} 
                className={`favorite-button ${favorite ? 'active' : ''}`}
              >
                <Star size={20} />
              </button>
            </div>

            {/* Line 2 */}
            <p className="company-name">{stockData.name}</p>
            
            {/* Line 3 */}
            <p className="exchange">{stockData.exchange}</p>
            
          </div>

          {/* Middle - Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              {/* Simple wave icon as shown in your image */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="10" r="3" fill="white" />
                <path d="M4 18C8 10 12 22 16 18C20 14 24 24 28 18" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        
          {/* Right side price section */}
          <div className='stock-price'>
            <div className='current-price'>{stockData.price}</div>
            <div className={`price-change ${stockData.change >= 0 ? 'positive' : 'negative'}`}>
              {stockData.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{stockData.change.toFixed(2)} ({stockData.changePercent.toFixed(2)}%)</span>
            </div>

            <div className="timestamp">{stockData.timestamp}</div>
          </div>

        </div>

        {/* Market status */}
        <div className="market-status">
          <p className="status-text">Market is {stockData.marketStatus}</p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Summary</button>
          <button className="tab">Top News</button>
          <button className="tab">Charts</button>
          <button className="tab">Insights</button>
        </div>
      
        {/* Main content */}
        <div className="main-content">
          {/* Left column */}
          <div className="left-column">
            <div className="price-summary">
              <div className="info-grid">
                <div className="label">High Price:</div>
                <div className="value">{stockData.highPrice}</div>
                
                <div className="label">Low Price:</div>
                <div className="value">{stockData.lowPrice}</div>
                
                <div className="label">Open Price:</div>
                <div className="value">{stockData.openPrice}</div>
                
                <div className="label">Prev. Close:</div>
                <div className="value">{stockData.prevClose}</div>
              </div>
            </div>

            <h3 className="section-title">About the company</h3>
            
            <div className="company-info">
              <div className="info-grid">
                <div className="label">IPO Start Date:</div>
                <div className="value">{stockData.ipoDate}</div>
                
                <div className="label">Industry:</div>
                <div className="value">{stockData.industry}</div>
                
                <div className="label">Webpage:</div>
                <div className="value">
                  <a href={stockData.website} className="website-link">{stockData.website}</a>
                </div>
              </div>
            </div>

            <div className="company-peers">
              <div className="peers-label">Company peers:</div>
              <div className="peers-list">
                {stockData.peers.map(peer => (
                  <a 
                    key={peer} 
                    href="#" 
                    className="peer-link"
                  >
                    {peer}
                  </a>
                ))}
              </div>
            </div>

            <div className="buy-button-container">
              <button className="buy-button">Buy</button>
            </div>
          </div>

          {/* Right column - Chart */}
          <div className="right-column">
            <div className="chart-container">
              <h3 className="chart-title">AAPL Hourly Price Variation</h3>
              
              <div className="chart">
                {/* Chart */}
                <svg viewBox="0 0 400 200" className="chart-svg">
                  {/* Y-axis labels */}
                  <text x="10" y="20" className="axis-label">{maxPrice}</text>
                  <text x="10" y="100" className="axis-label">
                    {((maxPrice + minPrice) / 2).toFixed(1)}
                  </text>
                  <text x="10" y="180" className="axis-label">{minPrice}</text>
                  
                  {/* Line chart */}
                  <path
                    d={hourlyData.map((point, index) => {
                      const x = 40 + (index * (360 / (hourlyData.length - 1)));
                      const normalizedPrice = 180 - ((point.price - minPrice) / (maxPrice - minPrice) * 160);
                      return `${index === 0 ? 'M' : 'L'} ${x} ${normalizedPrice}`;
                    }).join(' ')}
                    className="chart-line"
                  />
                  
                  {/* X-axis labels - show only a few to avoid crowding */}
                  {hourlyData.filter((_, i) => i % 3 === 0).map((point, i) => (
                    <text 
                      key={i} 
                      x={40 + (i * 3 * (360 / (hourlyData.length - 1)))} 
                      y="195" 
                      className="axis-label"
                      textAnchor="middle"
                    >
                      {point.time}
                    </text>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default StockCard;