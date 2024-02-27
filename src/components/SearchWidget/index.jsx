import React, { useState, useEffect } from "react";
import ShowCard from "../ShowCard";
import ShowList from "../ShowList";
import { useShow } from "../../contexts";
import Form from "../Form";
import RatingOrder from "../RatingOrder";

export default function SearchWidget() {
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("Married at First Sight");
  //input value clears AFTER entering a search.
  // const [showData, setShowData] = useState([]);
  const { setShowData } = useShow();

  useEffect(() => {
    async function searchApi() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const rawData = await response.json();
      const data = rawData.map(s => s.show);
      setShowData(data);
    }
    searchApi();
  }, [searchString]);

  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  }

  //On submit, the form will clear.

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        inputValue={inputValue}
      />
      <RatingOrder />
      <ShowList />
    </>
  );
}
