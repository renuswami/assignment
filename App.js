import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const data = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar', 
  'Chhattisgarh',
  'Goa', 
  'Gujarat',
  'Haryana', 
  'Himachal Pradesh', 
  'Jammu and Kashmir',
  'Jharkhand', 
  'Karnataka',
  'Kerala',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan'
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (searchTerm.length < 3) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const debouncedSearch = debounce(() => {
      const results = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setShowDropdown(true);
    }, 500);

    debouncedSearch();
    return debouncedSearch.cancel;
  }, [searchTerm]);

  const handleSelect = item => {
    setSearchTerm(item);
    setShowDropdown(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search State"
      />
      {showDropdown && (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index} onClick={() => handleSelect(result)}>
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;