import deepFreeze from 'deep-freeze'
import counterReducer, {
  incrementGood,
  incrementOk,
  incrementBad,
  reset
} from './store/counterSlice'

test('should return the initial state when the previous state is undefined', () => {
  const state = undefined
  const action = { type: '@@INIT' }

  const newState = counterReducer(state, action)
  expect(newState).toEqual({ good: 0, ok: 0, bad: 0 })
})

test('incrementGood should increment good by 1', () => {
  const state = { good: 0, ok: 0, bad: 0 }
  deepFreeze(state)

  const newState = counterReducer(state, incrementGood())
  expect(newState).toEqual({ good: 1, ok: 0, bad: 0 })
})

test('incrementOk should increment ok by 1', () => {
  const state = { good: 0, ok: 0, bad: 0 }
  deepFreeze(state)

  const newState = counterReducer(state, incrementOk())
  expect(newState).toEqual({ good: 0, ok: 1, bad: 0 })
})

test('incrementBad should increment bad by 1', () => {
  const state = { good: 0, ok: 0, bad: 0 }
  deepFreeze(state)

  const newState = counterReducer(state, incrementBad())
  expect(newState).toEqual({ good: 0, ok: 0, bad: 1 })
})

test('reset should reset all values to 0', () => {
  const state = { good: 5, ok: 3, bad: 2 }
  deepFreeze(state)

  const newState = counterReducer(state, reset())
  expect(newState).toEqual({ good: 0, ok: 0, bad: 0 })
})
