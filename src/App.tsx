import { useState, useEffect } from "react";
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import SearchEvent from './components/SearchEvent';
import './App.css';

interface EventData {
  id: number;
  title: string;
  description: string;
  datetime: string; // format: "YYYY-MM-DD HH:mm"
}

function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [searchResult, setSearchResult] = useState<EventData[]>([]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleCreateEvent = (data: {
    title: string;
    description: string;
    date: string;
    time: string;
  }) => {
    const newEvent: EventData = {
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
    setAlertMessage("");
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

// Check for upcoming events every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      events.forEach(event => {
        const eventTime = new Date(event.datetime);
        const minutesLeft = (eventTime.getTime() - now.getTime()) / 60000;
        if (minutesLeft <= 5 && minutesLeft > 1) {
          setAlertMessage(`The event "${event.title}" is abaut to start! ${event.datetime}`);
        }
      });
    }, 60000);
    return () => clearInterval(interval);
    }, [events]);

  return (
    <div className="container">
      <h1>Events Registration</h1>
      <EventForm onCreateEvent={handleCreateEvent} />

      {alertMessage && (
        <div style={{ backgroundColor: "#f99e03cc", borderRadius: "4px", padding: "10px", margin: "10px 0", textAlign: "center" }}>
          {alertMessage}
        </div>
      )}

      <h2>Event List</h2>
      <EventList events={events} />

      <h2>Search Event by ID</h2>
      <SearchEvent onSearch={handleSearch} searchResult={searchResult} />

      {searchResult.length === 1 && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3> Event</h3>
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

export default App;;

