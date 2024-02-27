import React from "react";
import { useShow } from "../../contexts";

export default function Form({ handleSubmit, handleInput, inputValue }) {
  const { checked, setChecked } = useShow();
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={inputValue} required />
      <input type="submit" value="search" />
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        Order by rating
      </label>
    </form>
  );
}

//  checked={checked} onChange={handleCheck}
