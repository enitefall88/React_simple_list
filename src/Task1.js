import React from "react"
import * as PT from 'prop-types'

export default function Task1() {
  let query = (new URL(document.location)).searchParams
  console.log(query)
  let c = Number(query.get("c")) || 3
  console.log(c)
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
        <a key={i} href={`?c=${i}`} className={`list-group-item list-group-item-action ${i == c ? "active" : null}`}>
  {el}
        </a>)}
  </ul >
}

DisplayLi.propTypes = {
  c: PT.number.isRequired,
  xs: PT.array.isRequired
}


