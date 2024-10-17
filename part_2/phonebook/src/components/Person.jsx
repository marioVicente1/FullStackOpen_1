import React from 'react'

const Person = ({ persons, handleRemovePerson }) => {
  console.log('🚀 ~ Person ~ persons:', persons)
  return (
    <ul>
      {persons.map((person, index) => (
        <li key={index}>
          {person.name} - {person.number}{' '}
          <button onClick={() => handleRemovePerson(person)}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Person
