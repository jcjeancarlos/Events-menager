# Events-menager
Simulated REST API for managing event data using pure HTML, JavaScript and JSON. Designed to emulate API behavior without needing a server.

## React + TypeScript Integration

To reinforce architectural thinking and front-end capabilities using React and TypeScript.  
It consumes the core event data:

- Component-based structure (`<EventList />`)
- Strong typing with interfaces
- Separation of concerns (data, presentation)
- Easy scalability and modularity

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/jcjeancarlos/events-menager
2. Open index.html in your browser.

## Features

- Add events
- List all events
- Get event by ID

## Endpoints

- `POST /events` → Add a new event  
  Required fields: `title`, `description`, `datetime`

- `GET /events` → List all events

- `GET /events/:id` → Retrieve a single event by ID
