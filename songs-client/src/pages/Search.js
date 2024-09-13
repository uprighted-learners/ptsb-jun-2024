import { useEffect, useState } from "react"
import SongCard from "../components/SongCard"

function Search() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/api")
      .then((res) => res.json())
      .then((data) => setSongs(data))
  }, [])

  return (
    <>
      {songs.map((s) => (
        <SongCard song={s} key={s._id} />
      ))}
    </>
  )
}

export default Search
