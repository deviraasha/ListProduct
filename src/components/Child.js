import React from 'react'

export default function Child(test) {
    console.log('propschild',test)
  return (
    <div>{test.title}</div>
  )
}
