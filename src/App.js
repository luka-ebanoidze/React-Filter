import { useState } from "react";
import "./App.css";

import { persons } from "./config/mock.persons";
import { searchPerson } from './utils/searchPerson'

function App() {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="App">
      <input
        value={searchTerm}
        placeholder="საძიებო სიტყვა"
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />

      <h1>Searched Items</h1>

      <ul>{persons.map((person)=> {
        if(searchTerm === '') {
          return;
        }
        if(searchPerson(person, searchTerm)) {
          return <li key={person.name}>{person.name} <br /> {person.city} <br /> {person.age}</li>
        }
      })}</ul>
    </div>
  );
}

export default App;
