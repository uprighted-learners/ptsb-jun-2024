import "./songCard.css"
import { useNavigate } from "react-router-dom"

function SongCard({ song }) {
  const nav = useNavigate()
  return (
    <div className="song-card" onClick={() => nav(`detail/${song._id}`)}>
      <div className="title">{song.title}</div>
      <div>{song.artist}</div>
    </div>
  )
}

export default SongCard
