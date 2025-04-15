
import React, { useState } from 'react';
import SearchBar from './SearchInput';
import StockDetails from './StockCard/StockCard';
import styles from './Search.module.css';

const Search: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);

  const handleSearch = (stockSymbol: string) => {
    setSelectedStock(stockSymbol); // Update the selected stock symbol
  };

  return (
    <div className={styles.search}>
      <h1>STOCK SEARCH</h1>
      <SearchBar onSearch={handleSearch}/>
      {selectedStock && <StockDetails stockSymbol={selectedStock} />}
    </div>
  );
};

export default Search;