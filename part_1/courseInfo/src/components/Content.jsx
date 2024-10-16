import React from 'react'
import { Part } from './Part'

export const Content = ({ parts }) => {
  console.log('🚀 ~ Content ~ parts:', parts)
  return (
    <div>
      {parts &&
        parts.map((part, index) => {
          return (
            <div key={index}>
              <Part name={part.name} exercises={part.exercises} />
            </div>
          )
        })}
    </div>
  )
}
