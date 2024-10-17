import React from 'react'

export const Filter = ({ search, handleSearchChange, resultSearch }) => {
  return (
    <div>
      filter show with <input value={search} onChange={handleSearchChange} />
      <ul>
        {search.length > 0 &&
          resultSearch.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
      </ul>
    </div>
  )
}
