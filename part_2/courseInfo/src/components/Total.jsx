import React from 'react'

export const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <strong>Total exercises: {totalExercises}</strong>
}
