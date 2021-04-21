function App() {
  return  <div>
    <DisplayGroup xs = {listGroup}/>
    </div>

}

let listGroup = [
    "First Item",
    "Second Item",
    "Third Item",
    "Fourth Item",
    "Fifth Item"]


function DisplayGroup({xs}) {
  return <ul className="list-group">
    {xs.map(el =>
        <a>
          <li className="list-group-item"> {el}</li>
        </a>)}
  </ul >
}

export default App;
