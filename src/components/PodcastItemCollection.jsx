export const PodcastItemCollection = ({content, onClick}) => {
  const listItems = content.map(podcastItem => {
    return (
      <div key={podcastItem.id} className="card" >
        <img src={podcastItem.image} className="card-img-top" alt={podcastItem.title} />
        <div className="card-body">
          <h5 className="card-title">{podcastItem.title}</h5>
          <p className="card-text">{podcastItem.artist}</p>
          <a href="/track" className="more-btn" data-id={podcastItem.id} data-url={podcastItem.image} onClick={onClick}>更多</a><br />
        </div>
      </div> 
    )
  })
  return (
    <div className="podcast-panel">
      {listItems}
    </div>
  )
}