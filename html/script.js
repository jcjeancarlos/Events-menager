let events = [];

// Look if is there events in local storage
if (localStorage.getItem("events")) {
  events = JSON.parse(localStorage.getItem("events"));
  renderEvents();
}

// Send and create a new event
document.getElementById("eventForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const datetime = document.getElementById("datetime").value;

  const newEvent = {
    id: events.length + 1,
    title,
    description,
    datetime
  };

  events.push(newEvent);
  localStorage.setItem("events", JSON.stringify(events));
  renderEvents();
  this.reset();
});

// Shows the events
function renderEvents() {
  const list = document.getElementById("eventList");
  list.innerHTML = "";

  events.forEach(event => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${event.id} - ${event.title} (${event.datetime})
    `;
    list.appendChild(li);
  });
}

// Search event by ID
function searchEvent() {
  const id = parseInt(document.getElementById("searchId").value);
  const result = events.find(e => e.id === id);

  const div = document.getElementById("searchResult");
  if (result) {
    div.innerHTML = `
      <strong>Title:</strong> ${result.title}<br>
      <strong>Description:</strong> ${result.description}<br>
      <strong>Datetime:</strong> ${result.datetime}
    `;
  } else {
    div.textContent = "Event not found.";
  }
}

document.getElementById("clearEvents").addEventListener("click", function() {
  localStorage.removeItem("events");
  events = []; // Clear array
  renderEvents(); // Refresh list
});