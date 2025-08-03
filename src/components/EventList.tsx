
import React from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

interface Props {
  events: Event[];
}

const EventList: React.FC<Props> = ({ events }) => {
const visibleEvents = events.slice(-5);

return (
  <div>
    <ul>
      {visibleEvents.map((event) => (
        <li key={event.id}>
          <strong>{event.title}</strong><br />
          {event.description}<br />
          <em>{event.datetime}</em>
        </li>
      ))}
    </ul>
  </div>
);
};

export default EventList;
