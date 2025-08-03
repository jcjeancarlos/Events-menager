
import { useState } from 'react';

interface SearchEventProps {
  onSearch: (id: string) => void;
}

function SearchEvent({ onSearch }: SearchEventProps) {
  const [searchId, setSearchId] = useState('');

  const handleClick = () => {
    if (searchId.trim() !== '') {
      onSearch(searchId);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Event ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchEvent;

