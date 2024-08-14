import React from 'react'
import { useParams } from 'react-router-dom'

const DetailsFilm = () => {
    const { id } = useParams()
  return (
    <div>DetailsFilm</div>
  )
}

export default DetailsFilm