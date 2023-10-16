export const AlbumCollection = ({searchResult, onClick}) => {
  let listItems = []
  if (searchResult){
    listItems = searchResult.map(album => {
    return (
      <div key={album.id} className="result-card" 
      onClick={onClick}
      data-id={album.id}
      data-img={album.images[1].url}
      data-title={album.name}
      data-name={album.artists[0].name}>
        <img src={album.images[1].url} alt={album.name} className="album-icon" />
        <p className="album-name">{album.name}</p>
        <p className="artist-name">{album.artists[0].name}</p>
        <div className="search-select">
          <div className="search-select-action"></div>
        </div>
      </div>
    )
   })
  } else {
    listItems = (<><div>no result</div></>)
  }
  return listItems
}