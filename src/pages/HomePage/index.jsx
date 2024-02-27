import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "#1746A2",
};
//Option to place this in the app.css, using className. Remeber to import app.css if doing this way.

export default function HomePage() {
  return (
    <div>
      <h1>Top TV</h1>
      <em>All about the smaller silver screen</em>
      <ul>
        <li>
          <Link to="/shows" style={linkStyle}>
            Explore shows
          </Link>
        </li>
        <li>
          <Link to="/search" style={linkStyle}>
            Search your favourite show
          </Link>
        </li>
      </ul>
    </div>
  );
}
