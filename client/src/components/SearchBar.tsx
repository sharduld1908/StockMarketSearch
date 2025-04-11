import { useState, useRef } from 'react';
import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Search query:", query);
        // Add your search logic here
    };

    const handleClear = () => {
        setQuery('');
        if (inputRef.current) {
          inputRef.current.focus();
        }
    };

    return (
        <div className={`ticker-search-container ${isFocused ? 'focused' : ''}`}>
            <div className="search-input-wrapper">
                <input 
                    ref={inputRef} 
                    type='text' 
                    value={query} 
                    onChange={(e:  React.ChangeEvent<HTMLInputElement>) => {setQuery(e.target.value)}}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={"Enter stock ticker symbol"}
                    className="ticker-search-input"
                />

                <button type="button" onClick={handleSubmit} className="search-icon-button" aria-label="Search">
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>

                {/* TODO: The clear button also removes stock search results */}
                {query && (
                    <button type="button" className="clear-button" onClick={handleClear} aria-label="Clear search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}

export default SearchBar;