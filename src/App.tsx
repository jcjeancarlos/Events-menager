import { useState, useEffect } from "react";
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import SearchEvent from './components/SearchEvent';

interface Event {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchResult, setSearchResult] = useState<Event[]>([]);

  const handleCreateEvent = (data: {
    title: string;
    description: string;
    date: string;
    time: string;
  }) => {
    const newEvent: Event = {
      id: events.length + 1,
      title: data.title,
      description: data.description,
      datetime: `${data.date} ${data.time}`,
    };
    setEvents([...events, newEvent]);
  };

  const handleSearch = (id: string) => {
    const result = events.filter((event) => event.id === Number(id));
    setSearchResult(result);
  };

  const handleClear = () => {
    localStorage.removeItem("events");
    setEvents([]);
    setSearchResult([]);
  };

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div>
      <h1>Events Registration</h1>
      <EventForm onCreateEvent={handleCreateEvent} />

      <h2>Event List</h2>
      <EventList events={events} />

      <h2>Search Event by ID</h2>
      <SearchEvent onSearch={handleSearch} />
      {searchResult.length === 1 && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>🔍 Event</h3>
          <p><strong>ID:</strong> {searchResult[0].id}</p>
          <p><strong>Title:</strong> {searchResult[0].title}</p>
          <p><strong>Description:</strong> {searchResult[0].description}</p>
          <p><strong>Date and Time:</strong> {searchResult[0].datetime}</p>
        </div>
     )}
      <button onClick={handleClear}>Clear events</button>
    </div>
  );
}

export default App;

