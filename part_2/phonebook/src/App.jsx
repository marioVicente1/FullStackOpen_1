import { useState, useEffect } from 'react'
import { Filter } from './components/Filter'
import Person from './components/Person'
import { PersonForm } from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setmessage] = useState({ sucess: '', error: '' })

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleSearchChange = event => {
    setSearch(event.target.value)
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${existingPerson.name} is already added to the phonebook, replace the old number with a new one?`
      )

      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber }

        personService
          .update(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(
              persons.map(person =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            )
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            alert(`Failed to update ${existingPerson.name}'s number.`)
          })
      }
    } else {
      const newPerson = { name: newName, number: newNumber }
      personService.create(newPerson).then(returnedPerson => {
        setPersons([...persons, returnedPerson])
        setmessage({ sucess: `Added ${newName}`, error: '' })
        setTimeout(() => {
          setmessage({ sucess: '', error: '' })
        }, 2000)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const resultSearch = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleRemovePerson = person => {
    const confirmRemove = window.confirm(
      `remove ${person.name} from phonebook?`
    )
    if (confirmRemove) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch(error => {
          setmessage({
            sucess: '',
            error: `information od ${person.name} has already been removed from server`
          })
          setTimeout(() => {
            setmessage({ sucess: '', error: '' })
          }, 2000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {message.sucess && <div style={{ color: 'green' }}>{message.sucess}</div>}
      {message.error && <div style={{ color: 'red' }}>{message.error}</div>}
      <br />
      <Filter
        search={search}
        handleSearchChange={handleSearchChange}
        resultSearch={resultSearch}
      />

      <br />
      <h3>Add a new</h3>
      <PersonForm
        onSubmitForm={onSubmitForm}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Person persons={persons} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App
