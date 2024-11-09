import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    clearNotification() {
      return ''
    }
  }
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer

export const showNotification = (message, timeInSeconds) => {
  return dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeInSeconds * 1000)
  }
}

let timeoutId

export const displayNotification = (message, duration) => {
  return dispatch => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    dispatch(setNotification(message))
    timeoutId = setTimeout(() => {
      dispatch(clearNotification())
    }, duration * 1000)
  }
}
