import React from 'react'

const Persons = (props) => {
  return (
    <div>
      {props.persons.map(person => 
        <div key = {person.id}>
          {person.name} {person.number} <button value={person.id} onClick={props.handleDelete}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons;