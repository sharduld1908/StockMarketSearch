
import SearchBar from './SearchBar';
import './SearchContent.css';

const SearchContent: React.FC = () => {

  return (
    <div className='search'>
      <h1>STOCK SEARCH</h1>
      <SearchBar />
    </div>
  );
};

export default SearchContent;