import React from 'react';

const SearchFilter = ({ searchTerm, onSearchChange, sortField, onSortFieldChange, sortOrder, onSortOrderChange }) => {
    
  return (
    <div className='flex gap-4'>
        <div className='w-full'>
            <label className="input input-bordered flex items-center gap-2">
                <input 
                    type="text" 
                    className="w-full" 
                    placeholder="Search" 
                    value={searchTerm} 
                    onChange={onSearchChange} 
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
            </label>
        </div>
        <div>
            <select value={sortField} onChange={onSortFieldChange} className="select select-bordered">
                <option value="country">Country</option>
                <option value="cases">Cases</option>
                <option value="deaths">Deaths</option>
                <option value="recovered">Recovered</option>
            </select>
        </div>
        <div>
            <select value={sortOrder} onChange={onSortOrderChange} className="select select-bordered">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    </div>
  );
};

export default SearchFilter;