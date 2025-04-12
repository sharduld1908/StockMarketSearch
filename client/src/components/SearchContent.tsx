
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import StockDetails from './StockDetails';
import './SearchContent.css';

const SearchContent: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  const handleSearch = (stockSymbol: string) => {
    setSelectedStock(stockSymbol); // Update the selected stock symbol
  };

  return (
    <div className='search'>
      <h1>STOCK SEARCH</h1>
      <SearchBar onSearch={handleSearch}/>
      {selectedStock && <StockDetails stockSymbol={selectedStock} />}
    </div>
  );
};

export default SearchContent;