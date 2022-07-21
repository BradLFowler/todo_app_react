import React from 'react'

export default function TodoCard(props) {

  const { title, handleRemoveTodo, index} = props
  
  return (
    <li>{title}
        <button onClick={() => handleRemoveTodo(index)}>Delete</button>
    </li>
  )
}
