import React, { useState } from 'react'

export function Form(props) {
  const [value, setValue] = useState('')

  return (
    <form>
      <label>Nome</label>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}
