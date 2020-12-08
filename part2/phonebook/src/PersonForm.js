import React from 'react'

const PersonForm = (props) => {
  const {handleSubmit, handleNameChange, handleNumberChange} = props.handlers;
  const {newName, newNumber} = props.values;
  return(
    <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleNameChange}/>
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
    </div>
    <div>
      <button type="submit" >add</button>
    </div>
    </form>
  )
}

export default PersonForm