import { useNavigate } from 'react-router-dom'
import { PodcastItemCollection } from './PodcastItemCollection'

export const CenterContent = ({ dummyCategory, onClickMore, onClickPlay, onClickSubscribe }) => {
  const navigate = useNavigate()
  const nowCategoryId = localStorage.getItem('nowCategoryId')
  const categories = JSON.parse(localStorage.getItem('Categories'))
  let category = {content: []}
  if (nowCategoryId !== '99'){ //id=99 is for favorite
    category = categories[Number(nowCategoryId) - 1]
  }
  
  if (nowCategoryId !== '99' && category.content.length > 0){
    return (
      <>
      <PodcastItemCollection content={category.content} onClick={onClickMore} />
      <div className="podcast-panel">
        <div className="podcast-panel-add">
          <img src="src/assets/search.png" alt="" className="podcast-panel-add-img" />
          <p>點擊下方按鈕新增！</p>
          <div className="add-btn" onClick={() => navigate('/search')}>新增 Album</div>
        </div>
      </div>
      </>
    )
  } 
  if (nowCategoryId !== '99' && category.content.length === 0) {
    return (
      <div className="podcast-panel">
        <div className="podcast-panel-add">
          <img src="src/assets/search.png" alt="" className="podcast-panel-add-img" />
          <p>您尚未加入任何album，可以點擊下方按鈕新增！</p>
          <div className="add-btn" onClick={() => navigate('/search')}>新增 Album</div>
        </div>
      </div>
    )
  }
  if (nowCategoryId === '99'){
    const tracks = JSON.parse(localStorage.getItem('subscribed'))
    let listItems = []
    if (tracks) {
      listItems = tracks.map( track => {
        return (
          <div key={track.id} className="track-card">
            <img src={track.image} alt="" className="track-icon" />
            <div className="track-info">
              <div className="track-title">
                {track.title}
                <div className="subscribe-tag subscribed" onClick={onClickSubscribe}
                  data-id={track.id}
                  data-url={track.audio}
                  data-name={track.artist}
                  data-time={track.duration}
                  data-title={track.title}
                  data-img={track.image}></div>
              </div>
              <div className="track-description">{track.artist}</div>
              <div className="play-btn-panel">
                <div className="play-btn" 
                  data-url={track.audio} 
                  onClick={onClickPlay}
                  data-time={track.duration}
                  data-title={track.title}
                  data-img={track.image}
                  data-name={track.artist}></div>
                <div className="track-date-duration">{
                  Math.round(Number(track.duration) / 60000) + ' 分' +
                  Math.round(Number(track.duration) / 1000) % 60 + ' 秒'}</div>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      listItems
    )
  } 
}