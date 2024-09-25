import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"
import SongCard from "../components/SongCard"

function Detail() {
  const { songId } = useParams()
  const { user } = useContext(UserContext)
  const [song, setSong] = useState({})

  useEffect(() => {
    // handle nonexistant ids
    fetch(`http://localhost:4000/api/catalog/${songId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: user.token,
      },
    })
      .then((res) => res.json())
      .then((data) => setSong(data))
      .catch((err) => console.warn(err))
  }, [])

  if (song._id) {
    return <SongCard song={song} />
  } else {
    return "this action is reserved for users"
  }
}

export default Detail
