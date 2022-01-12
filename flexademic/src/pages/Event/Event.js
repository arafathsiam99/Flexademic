import React, { useEffect, useState } from "react";
import "./Event.css";
function Event() {

  const [events, setEvents] = useState([]);

  // fetch events
  useEffect(() => {
    fetch('https://intense-hamlet-45905.herokuapp.com/news-events')
    .then((response) => response.json())
    .then((response) => setEvents(response))
  })


  return (
    <div>
      <div className="container event_style">
        <h1>Events Board</h1>
        {
          events.map((event) => 
          <div className="event_row" key={event._id}>
            <h3> {event.title}</h3>
            <p> {event.description}</p>
          </div>
           )
        }
        
      </div>
    </div>
  );
}

export default Event;
