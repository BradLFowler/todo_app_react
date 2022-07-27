import React from 'react'

export default function TodoCard(props) {

  const { title, handleRemoveTodo, index, handleEdit, handleStatus} = props
  
  return (
    <li className="todo">{title}
        <button onClick={handleStatus}>Urgency</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleRemoveTodo(index)}>Delete</button>
    </li>
  )
}
