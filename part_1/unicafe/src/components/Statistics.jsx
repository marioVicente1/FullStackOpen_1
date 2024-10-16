import React from 'react'
import { StatisticLine } from './StatisticLine'

export const Statistics = ({ good, neutral, bad }) => {
  let totalResponses = good + neutral + bad

  const average =
    totalResponses > 0
      ? (good * 1 + neutral * 0 + bad * -1) / totalResponses
      : 0

  const averagPositive = totalResponses > 0 ? (good / totalResponses) * 100 : 0
  return (
    <div>
      <h2>Statistic</h2>
      {totalResponses > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={totalResponses} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={averagPositive} />
          </tbody>
        </table>
      ) : (
        <div>
          <h4>No feeback given</h4>
        </div>
      )}
    </div>
  )
}
