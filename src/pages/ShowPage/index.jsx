import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//brings the id from app.jsx router /:id
import { ShowCard } from "../../components";

export default function ShowPage() {
  const [show, setShow] = useState({ image: {}, rating: {} });
  //retrieve one object instead of an empty array. Allows for if the image doesn't exist/medium isn't there
  const { id } = useParams();
  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
      //send the data to the useState
    }
    displayShow();
  }, []);
  return (
    <div>
      <ShowCard show={show} />
    </div>
  );
}

//Import {show} to ShowCard as a prop from the useState above
//send show through to ShowCard as a prop
//OR
// npm install html-react-parser
// import parse from 'html-react-parser';
// {parse(show.summary)}
