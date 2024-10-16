import { useState } from 'react'
import { Statistics } from './components/Statistics'
import { Butoon } from './components/Butoon'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  console.log('🚀 ~ App ~ good:', good)
  const [neutral, setNeutral] = useState(0)
  console.log('🚀 ~ App ~ neutral:', neutral)
  const [bad, setBad] = useState(0)
  console.log('🚀 ~ App ~ bad:', bad)

  const handleGoodButton = () => {
    setGood(good + 1)
  }
  const handleNeutralButton = () => {
    setNeutral(neutral + 1)
  }
  const handleBadButton = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Butoon
        handleGoodButton={handleGoodButton}
        handleNeutralButton={handleNeutralButton}
        handleBadButton={handleBadButton}
      />
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  )
}

export default App
