import React from 'react'

export const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}: {value}
      </td>
    </tr>
  )
}
