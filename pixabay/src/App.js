import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Image from '../src/components/Image'
import Search from '../src/components/Search'
import { BASE_URL, CONFIG } from '../src/globals'

export default function App() {
  const [images, setImages] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function getImages() {
      const res = await axios.get(`${BASE_URL}${CONFIG}`)
      setImages(res.data.results)
    }
    getImages()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const res = await axios.get(`${BASE_URL}${CONFIG}`)
    setSearchResults(res.data.results)
    toggleSearched(true)
  }

  const handleChange = async (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="App">
      <Search onChange={handleChange} onSubmit={getSearchResults} />

      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searchResults}
        </section>
      </div>

      <div className="images">
        <h2>Images</h2>
        <section>
          <Image images={images} />
        </section>
      </div>
    </div>
  )
}
