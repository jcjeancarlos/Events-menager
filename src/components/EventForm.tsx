
import React, { useState } from 'react';

interface EventFormProps {
  onCreateEvent: (event: EventData) => void;
}

interface EventData {
  title: string;
  description: string;
  date: string;
  time: string;
}

const EventForm: React.FC<EventFormProps> = ({ onCreateEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent: EventData = {
      title,
      description,
      date,
      time,
    };

    onCreateEvent(newEvent);
    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Events Registration</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
