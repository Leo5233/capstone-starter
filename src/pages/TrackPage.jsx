import { AlphaLogo } from '../components/AlphaLogo'
import { CategoryCollection } from '../components/Category'
import { useEffect, useState } from 'react'
import '../css/Track.scss'
import SpotifyWebApi from 'spotify-web-api-js'
import Swal from 'sweetalert2'

export const TrackPage = () => {
  let spotifyApi = new SpotifyWebApi()
  const [accessToken, setAccessToken] = useState('')
  const [tracksContent, setTracksContent] = useState('')
  const [bugCounter, setBugCounter] = useState(0)
  const [nowPlay, setNowPlay] = useState('https://p.scdn.co/mp3-preview/0bfd163c75bc37c20d9e8598a055a4465a4836bd?cid=d7ae00490ab7405da79f4c323a438f40')

  // first mission is to get authToken & set spotify api with this token
  function getAuthToken() {
    const clientId = 'd7ae00490ab7405da79f4c323a438f40'
    const clientSecret = 'a52a6f2d51e444a1976893df33907fd8'
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
    }
    console.log('Trying to get token')

    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
    console.log(accessToken)
    spotifyApi.setAccessToken(accessToken)
  }
  // read albumId from localStorage, which is sent when user click 'more' button at main page 
  function getAlbumTrack() {
    const albumId = localStorage.getItem('albumId')
    const albumIcon = localStorage.getItem('albumIcon')
    const subscribedItems = JSON.parse(localStorage.getItem('subscribed'))
    const subscribedIds = subscribedItems.map(track => track.id)
    // 將拿到的資料全部做渲染，並化成dataset參數透過handleClickToggleSubscribe存到localStorage，給mainPage使用
    spotifyApi.getAlbumTracks(albumId, {limit: 20}) 
      .then(function (data) {
        console.log('search tracks', data.items);
        setBugCounter(bugCounter + 1)
        setTracksContent(data.items.map(track => {
        
          return (
            <div key={track.id} className="track-card">
              <img src={albumIcon} alt="" className="track-icon" />
              <div className="track-info">
                <div className="track-title">
                  {track.name}
                  <div className={subscribedIds.includes(track.id) ? "subscribe-tag subscribed" : "subscribe-tag"} 
                  onClick={handleClickToggleSubscribe}
                   data-id={track.id}
                    data-url={track.preview_url}
                    data-name={track.artists[0].name}
                    data-time={track.duration_ms}
                    data-title={track.name}
                    data-img={albumIcon}></div>
                </div>
                <div className="track-description">{track.artists[0].name}</div>
                <div className="play-btn-panel">
                  <div className="play-btn" onClick={handleClickPlay} data-url={track.preview_url} ></div>
                  <div className="track-date-duration">{
                    Math.round(Number(track.duration_ms) / 60000) + ' 分' +
                    Math.round(Number(track.duration_ms) / 1000) % 60 + ' 秒'}</div>
                </div>
              </div>
            </div>
          )
        }))
      }, function (err) {
        getAuthToken()
        console.error(err);
      });
  }

  const handleClickPlay = (e) => {
    const nowPlayItem = document.querySelector('.play-active')
    const player = document.querySelector('.nowPlayer')
    const target = e.target.dataset.url
    console.log(target)
    if(nowPlayItem && nowPlayItem !== e.target){
      nowPlayItem.classList.remove('play-active')     
    }
    //有的沒有音檔連結就不變換圖示
    if (target) {
      e.target.classList.toggle('play-active')
    }
    //播放中點另一個則載入新track
    if (nowPlayItem && nowPlayItem !== e.target) {
      player.pause()
      player.src = target
      player.load()
      player.play()
    }
    //播放中再點一次同一個則暫停
    if (nowPlayItem && nowPlayItem === e.target) {
      player.pause()
    }
    //初次按下直接開始播放
    if(!nowPlayItem){
      player.src = target
      player.load()
      player.play()
    }
  }

const handleClickToggleSubscribe = (e) => {
  console.log(e.target.dataset.id)
  const targetClass = [...e.target.classList]
  const subscribedList = JSON.parse(localStorage.getItem('subscribed'))
  let newSubscribedList = []
  if (targetClass.includes('subscribed')){ //unsubscribe   
    newSubscribedList = subscribedList.filter(item => item.id !== e.target.dataset.id)
    Swal.fire({
      imageUrl: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/success_remove.png',
      imageWidth: 150,
      imageHeight: 50,
      imageAlt: 'success remove',
      timer: 1000,
      position: 'bottom-end',
      showConfirmButton: false,
      padding: '0rem',
      width: 250
    })
  } else { //subscribe
    const newData = {
      id: e.target.dataset.id,
      title: e.target.dataset.title,
      artist: e.target.dataset.name,
      duration: e.target.dataset.time,
      audio: e.target.dataset.url,
      image: e.target.dataset.img
    }
    console.log(newData)
    if (!subscribedList) { //subscribe first time
      newSubscribedList = [newData]
    } else { //subscribe
      newSubscribedList = [...subscribedList, newData]
    }
    Swal.fire({
      imageUrl: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/success.png',
      imageWidth: 150,
      imageHeight: 50,
      imageAlt: 'success add',
      timer: 1000,
      position: 'bottom-end',
      width: 250,
      padding: '0rem',
      showConfirmButton: false
    })
  }
  localStorage.setItem('subscribed', JSON.stringify(newSubscribedList))
  e.target.classList.toggle('subscribed')
}

  useEffect(() => {
    getAuthToken()
    // getAlbumTrack() somehow doesn't work if this is here
    
  }, [])
  if (bugCounter === 0) { 
    console.log(bugCounter) //to avoid from loading over and over
    getAlbumTrack()}
    
  return (<>
    <div className="entrance-container">
      <div className="main-left">
        <AlphaLogo width={'150px'} />
        <hr />
        <CategoryCollection categories={[
          { id: 1, title: '通勤清單', src: 'src/assets/commute.png', content: [] },
          { id: 2, title: '讀書清單', src: 'src/assets/study.png', content: [] },
          { id: 3, title: '睡前清單', src: 'src/assets/sleep.png', content: [] },
          { id: 4, title: '我的Podcast', src: 'src/assets/home.png', content: [] },
          { id: 5, title: '已收藏', src: 'src/assets/heart.png', content: [] }
        ]} />
        <div className="add-category" >+ &nbsp;新增分類</div>
      </div>
      <div className="main-center">
        <h2>早安</h2>
        <div className="podcast-panel">
        </div>
      </div>
      <div className="main-right">
        <div className="profile">
          <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="" className="avatar" />
          <h3 className="username">John Don</h3>
        </div>
        <div className="playitem-panel">
          <h2>正在播放</h2>
          <hr />
          <div className="play-theme">
            <img src="src/assets/cover2.png" alt="" className="thumbnail" />
            <div className="theme-text"><p>Starting Your Own Podcast: Tips, Tricks and Advice From Anchor...</p></div>
          </div>
          <div className="play-text">
            <p className="play-text-title">Seinobo Sey</p>
            <p className="play-text-date">2023-04-08.1小時20分</p>
            <p className="play-text-detail">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. </p>
          </div>
          <div className="player">
            <audio controls className="nowPlayer">
              <source src={nowPlay} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
    <div className="blur-cover "></div>
    <div className="track-modal search-panel">
      <div className="modal-title">
        <h3>曲目</h3>
        <div>
          <a href='/main'>x</a>
        </div>
      </div>
      <hr />
        <div className="tracks-container">
          {tracksContent}
        </div>
    </div>
  </>)
}