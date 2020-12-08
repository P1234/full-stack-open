import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Persons from "./Persons"
import PersonForm from "./PersonForm"
import Filter from "./Filter"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName ] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

  const personsToShow = persons.filter( person => person.name.toLowerCase().includes(search.toLowerCase()))

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkDuplicate()) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, {name: newName, number: newNumber}])
      setNewName("")
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const checkDuplicate = () => {
    return (persons.map(person => person.name).indexOf(newName) >= 0)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter search={search} handleSearch={handleSearch}/>
      <h2>Add a new</h2>
        <PersonForm handlers = {{handleSubmit, handleNameChange, handleNumberChange}} values={{newName, newNumber}}/>
      <h2>Numbers</h2>
        <Persons persons = {personsToShow}/>
    </div>
  )
}

export default App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

