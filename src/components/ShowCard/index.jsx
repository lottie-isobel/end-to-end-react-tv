import React from "react";

export default function ShowCard({ show }) {
  return (
    <div className="show-card">
      <div>
        <img src={show.image.medium} />
      </div>
      <div>
        <div>
          {show.rating.average ? <span>({show.rating.average}/10)</span> : ""}
        </div>
        <h2>{show.name}</h2>
        <em>
          {show.language}, {show.premiered}
        </em>
        <div>{show.summary && show.summary.replace(/<[^>]+>/g, "")}</div>
      </div>
    </div>
  );
}

//.replace removes the html tags showing on the webpage
//Another way to solve...
//<div dangerouslySetInnerHTML={{__html:show.summary}}>
