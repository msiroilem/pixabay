import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Search from '../src/components/Search'
import { BASE_URL, CONFIG } from '../src/globals'

export default function App() {
  const [images, setImages] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (!searched) {
      getImages()
    }
  }, [])

  const getImages = async () => {
    const res = await axios.get(`${BASE_URL}`)
    setImages(res.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`${BASE_URL}`)
    setSearchResults(res.data.results)
    toggleSearched(true)
  }

  const handleChange = async (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="App">
      <Search onChange={handleChange} onSubmit={getSearchResults} />
    </div>
  )
}
