import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import Persons from "./Persons"
import PersonForm from "./PersonForm"
import Filter from "./Filter"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName ] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    personService.getAll()
    .then(res => {setPersons(res)})
  }, [])

  const personsToShow = persons.filter( person => person.name.toLowerCase().includes(search.toLowerCase()))

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = checkDuplicateName();
    if ( index >= 0) {
      const newObject = {name: newName, number: newNumber, id: persons[index].id}
      personService.update(persons[index].id, newObject);
      setPersons(persons.map(person => person.id !== persons[index].id ? person : newObject))
    } else {
      const newObject = {name: newName, number: newNumber, id: persons.length + 1};
      personService.create(newObject)
      .then(res => {
        setPersons([...persons, res]);
      })
    }
    setNewName("");
    setNewNumber("");
  }

  const handleDelete = (e) => {
    personService.deletePerson(e.target.value)
    setPersons(persons.filter(person => person.id !== parseInt(e.target.value)))
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

  const checkDuplicateName = () => {
    return (persons.map(person => person.name).indexOf(newName))
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter search={search} handleSearch={handleSearch}/>
      <h2>Add a new</h2>
        <PersonForm handlers = {{handleSubmit, handleNameChange, handleNumberChange}} values={{newName, newNumber}}/>
      <h2>Numbers</h2>
        <Persons persons = {personsToShow} handleDelete={handleDelete}/>
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

