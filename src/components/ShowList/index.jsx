import React from "react";
import ShowCard from "../ShowCard";
import { useShow } from "../../contexts";

export default function ShowList() {
  const { showData } = useShow();
  return (
    <div>
      {showData.map(s => (s.image ? <ShowCard show={s} key={s.id} /> : ""))}
    </div>
  );
}
//prop brings in showData from SearchWidget as a prop.
