import { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import React from 'react'
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // New loading state

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Search query:", query);
        // Add your search logic here
    };

    const handleInputChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleClear = () => {
        setQuery('');
        if (inputRef.current) {
          inputRef.current.focus();
        }
    };

    const fetchSuggestions = useCallback(async (searchTerm: string) => {
        if (!searchTerm) {
            setResults([]);
            return;
        }
        
        setLoading(true); // Set loading to true when fetching
        setResults([]); // Clear previous results
        try {
            const response = await axios.get('http://localhost:3000/search', {
                params: { q: searchTerm }
            });
            setResults(response.data.result);
        } 
        catch (error) {
            console.error("Error fetching search results:", error);
        }
        finally {
            setLoading(false); // Set loading to false after fetching
        }
    }, []);

    // Debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchSuggestions(query);
        }, 500); // 500ms debounce

        return () => clearTimeout(timeoutId);
    }, [query, fetchSuggestions]);

    return (
        <div className={`ticker-search-container ${isFocused ? 'focused' : ''}`}>
            <div className="search-input-wrapper">
                <input 
                    ref={inputRef} 
                    type='text' 
                    value={query} 
                    onChange={handleInputChange}
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

            {/* 🔽 Display suggestions */}
            {results.length > 0 && (
                <ul className="search-suggestions">
                    {results.map((item, index) => (
                        <div className='search-suggestion-list-div' key={index}>
                            <li key={index}>
                                {item.symbol} | {item.description}
                            </li>
                            <hr/>
                        </div>
                    ))}
                </ul>
            )}

            {/* Show spinner in dropdown area when loading */}
            {loading && query && !results.length && (
                <div className="search-suggestions loading-dropdown">
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <span>Loading...</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchBar;