import { addAnecdote, createNote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { displayNotification } from '../reducers/notifications'

export const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleNewAnecdote = async event => {
    event.preventDefault()
    const content = event.target.elements.anecdote.value
    event.target.elements.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(createNote(content))
    dispatch(displayNotification(`New anecdote added: '${content}'`, 5))
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}
