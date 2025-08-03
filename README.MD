
# Events Menager

Simulated REST API for managing event data using pure HTML, JavaScript and JSON. Designed to emulate API behavior without needing a server.
Now enhanced with a React + TypeScript SPA to demonstrate architectural thinking and front-end capabilities.

## React + TypeScript Integration

To reinforce architectural thinking and front-end capabilities, a new SPA was developed using React and TypeScript.  
It consumes the core event data:

- React + TypeScript
- Vite
- Strong typing with interfaces
- Separation of concerns (data, presentation)
- Easy scalability and modularity

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/jcjeancarlos/events-menager

2. Open index.html in your browser.

### React + TypeScript SPA
   Navigate to the project folder:

   bash

   cd events-menager
   npm install
   npm run dev
   Open your browser at: http://localhost:5173
   
## Features
   
   * Create events with title, description, and datetime

   * List all events

   * Search event by ID

   * Simulated notification when an event is about to start (1–5 min before)

## If I Had More Time...

- **More code modularization** 

  Refactor components and logic for better readability and easier maintenance.

- **Delete individual events**  

  Allow users to remove specific events from the list.

- **Edit existing events**  

  Enable editing of event details such as title, description, date, and time.

- **Responsive design**  

  Improve layout and usability on mobile devices.

- **Browser notifications**  

  Use the Notification API to alert users when events are about to start.

- **Improve UI/UX with animations and feedback**  

  Add subtle transitions, loading indicators, and user feedback for better interactivity.

## If it had to serve 10,000 users a day,

   Data storage, localStorage is not suitable for multi-user environments.

   Backend logic to handle simultaneous requests or data conflicts.

   Notification logic need to be replaced with real-time mechanisms like background workers or push notifications.
