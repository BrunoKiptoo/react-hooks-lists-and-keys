import React from "react";
import { nanoid } from 'nanoid';

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorItem = (colors.map(color => {
    return <li key = {nanoid()} style = {{color : color}}>{color}</li>
  }))

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