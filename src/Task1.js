import React from "react"

export default function Task1() {
  let query = (new URL(document.location)).searchParams
  let c = Number(query.get("c")) || 0
  return <div className="p-3">
    <DisplayLi c={c}  xs={[
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item",
    "Fifth Item"
  ]}/>
  </div>
}

function DisplayLi({c, xs}) {
  return <ul className="list-group">
    {xs.map((el,i) =>
        <a key={i} href={`?c=${i}`} className={`list-group-item list-group-item-action ${i == c ? "active" : ""}`}>
  {el}
        </a>)}
  </ul >
}


