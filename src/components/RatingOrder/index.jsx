import React from "react";
import ShowCard from "../ShowCard";
import { useShow } from "../../contexts";

export default function RatingOrder() {
  const { showData, checked } = useShow();
  checked && showData.sort((a, b) => b.rating.average - a.rating.average);

  return (
    <div>
      {showData.map(s => (s.image ? <ShowCard show={s} key={s.id} /> : ""))}
    </div>
  );
}
