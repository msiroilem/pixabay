import React from 'react'

export default function Search({ onSubmit, onChange, value }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Search Images"
        onChange={(e) => onChange(e)}
      ></input>
      <button type="submit">Search</button>
    </form>
  )
}
