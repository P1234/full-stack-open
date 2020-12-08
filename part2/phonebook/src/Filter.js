import React from 'react';

const Filter = (props) => {
  return (
    <div>
      Filter shown with a <input value={props.search} onChange={props.handleSearch}/>
    </div>
  )
}

export default Filter
