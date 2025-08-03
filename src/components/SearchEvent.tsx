import { useState } from 'react';

interface EventData {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

interface SearchEventProps {
  onSearch: (id: string) => void;
  searchResult: EventData[];
}

function SearchEvent({ onSearch, searchResult }: SearchEventProps) {
  const [searchId, setSearchId] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleClick = () => {
    const idNum = Number(searchId);
    if (searchId.trim() !== '' && idNum > 0) {
      onSearch(searchId);
      setSearchPerformed(true);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Event ID"
        value={searchId}
        onChange={(e) => {
          setSearchId(e.target.value);
          setSearchPerformed(false);
        }}
      />
      <button onClick={handleClick} >Search</button>

      {searchPerformed && searchResult.length === 0 && (
        <p style={{ color: 'red', margin: '10px' }}>
          Event not found ID: {searchId}
        </p>
      )}
    </div>
  );
}

export default SearchEvent;
