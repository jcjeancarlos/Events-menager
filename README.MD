# Events-menager
solution to simulate a API

# Event API

This is a simple REST API for managing events. You can add events, list them, retrieve an event by ID.

## Features

- Add events
- List all events
- Get event by ID

## Endpoints

- `POST /events` → Add a new event  
  Required fields: `title`, `description`, `datetime`

- `GET /events` → List all events

- `GET /events/:id` → Retrieve a single event by ID


## How to Run

```bash
1- Clone the repository:

 bash
 git clone https://github.com/jcjeancarlos/events-menager  
2- Open the index.html file directly in your browser.

*** No need to install any dependencies or set up a backend. Everything works locally using HTML and JavaScript.***

-------------------------------------------------------------------------------------------

## If I had more time, I would...

- Worked on the back-end structure to ensure real usability

- Added background processes for efficient notifications

- Included unit and integration testing

- Used a persistent database instead of in-memory storage

- Documented the API using Swagger or similar tools

- Scaling consideration: designed for horizontal scalability and infrastructure resilience

## If this API had to serve 10,000 users per day:

- To ensure performance and scalability, this project must to focuses on critical pillars such as Infrastructure, Horizontal Scalability, Database optimization, and the adoption of Efficient Programming language and Frameworks.