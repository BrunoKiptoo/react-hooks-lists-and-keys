import React from "react";
import { nanoid } from 'nanoid';

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "hotpink",
    "darkslategray",
  ];
  const colorItem = (colors.map(color => {
    return <li key = {nanoid()} style = {{color : color}}>{color}</li>
  }))
                           //here, i have Transformed arrays of data into arrays of JSX elements
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorItem}
      </ol>
    </div>
  );
}

export default ColorList;