import "./songCard.css"

function SongCard({ song }) {
  return (
    <div className="song-card">
      <div className="title">{song.title}</div>
      <div>{song.artist}</div>
    </div>
  )
}

export default SongCard
