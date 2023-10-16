export const NowPlayItem = ({nowPlayItemInfo}) => {

  const handleClick = (e) => {
    const classList = [...e.target.classList]
    const player = document.querySelector('.nowPlayer')
    e.target.classList.toggle('play-active')
    if (classList.includes('play-active')){
      player.pause()
    } else {
      player.play()
    }
  }

  function calculateTime(duration_ms){
    const totalSecond = Number(duration_ms) / 1000
    if(totalSecond > 3600){
      return (
        Math.floor(totalSecond / 3600) + '小時' +
        Math.floor(totalSecond / 60) % 60 + '分' +
        Math.floor(totalSecond % 60) + '秒'
      )
    } else {
      return (
        Math.floor(totalSecond / 60) % 60 + '分' +
        Math.floor(totalSecond % 60) + '秒'
      )
    }
  }
  return (
    <div className="playitem-panel">
      <h2>正在播放</h2>
      <hr />
      <div className="play-theme">
        <img src={nowPlayItemInfo.image} alt="" className="thumbnail" />
        <div className="theme-text"><p>{nowPlayItemInfo.title}</p></div>
      </div>
      <div className="play-text">
        <p className="play-text-title">{nowPlayItemInfo.artist}</p>
        <p className="play-text-date">2023-04-08.{calculateTime(nowPlayItemInfo.duration)}</p>
        <p className="play-text-detail">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. </p>
      </div>
      <div className="player">
        <audio controls className="nowPlayer">
          <source src="https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="play-btn" onClick={handleClick}></div>
      </div>
    </div>
  )
}