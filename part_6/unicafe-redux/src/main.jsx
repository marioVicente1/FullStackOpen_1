import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSelector, useDispatch } from 'react-redux'
import store from './store/store'
import { Provider } from 'react-redux'
import {
  incrementGood,
  incrementOk,
  incrementBad,
  reset
} from './store/counterSlice'

const App = () => {
  const { good, ok, bad } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Feedback Counter</h1>
      <button onClick={() => dispatch(incrementGood())}>good</button>
      <button onClick={() => dispatch(incrementOk())}>ok</button>
      <button onClick={() => dispatch(incrementBad())}>bad</button>
      <button onClick={() => dispatch(reset())}>reset stats</button>
      <div>Good: {good}</div>
      <div>Ok: {ok}</div>
      <div>Bad: {bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

renderApp()
store.subscribe(renderApp)
