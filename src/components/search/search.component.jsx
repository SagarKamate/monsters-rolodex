import React from "react";
import './search.component.style.css';

export const Search = ({placeholder, handleChange}) => {
    return <input 
                className="search-box"
                type="search" 
                placeholder={placeholder} 
                onChange={handleChange} 
            />;
}