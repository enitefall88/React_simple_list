
import React from "react"

export default function Task1() {
  let query = (new URL(document.location)).searchParams
  let c = Number(query.get("c")) || 0
  return <div className="p-3">
    <DisplayLi  xs={[
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item",
    "Fifth Item"
  ]}/>
  </div>
}

function DisplayLi({xs}) {
  return <ul className="list-group">
    {xs.map(el =>
        <a>
          <li className="list-group-item active"> {el}</li>
        </a>)}
  </ul >
}
