import { AlphaLogo } from '../components/AlphaLogo'
import { CategoryCollection } from '../components/Category'
import { AlbumCollection } from '../components/AlbumCollection'
import { useEffect, useState } from 'react'
import '../css/Search.scss'
import SpotifyWebApi from 'spotify-web-api-js'
import { useNavigate } from 'react-router-dom'

export const SearchPage = () => {

  let spotifyApi = new SpotifyWebApi()
  const [searchInput, setSearchInput] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [albumList, setAlbumList] = useState([])
  const navigate = useNavigate()
  // const scope = ['playlist-modify-public',
  //     'playlist-read-private',
  //     'playlist-modify-private',
  //     'user-read-private',
  //     'user-read-playback-position',
  //     'user-library-read',
  //     'playlist-read-collaborative',
  //     'user-read-email'
  //   ]

  // first mission is to get authToken & set spotify api with this token
  async function getAuthToken(){
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

    await fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
    console.log(accessToken)
    spotifyApi.setAccessToken(accessToken)
  }
  useEffect(() => {
    getAuthToken()
  }, [])

  //use spotify api to search with user input and save the result by setAlbumList()
  const handleChangeInput = async (e) => {
    setSearchInput(e.target.value)
    await spotifyApi.search(searchInput, ['album', 'show'],{limit: 20})
      .then(function (data) {
        console.log('search result', data.albums.items);
        setAlbumList(data.albums.items)
        // localStorage.setItem('staticPodcast', JSON.stringify(data.albums.items))
      }, function (err) {
        setAlbumList([])
        getAuthToken()
        console.error(err);
      });
  }

  const handleClickSearchItem = (e) => {
    const nowSelectedItem = document.querySelector('.search-active')
    if (nowSelectedItem) {
      nowSelectedItem.classList.remove('search-active')
    }
    e.target.parentElement.parentElement.classList.toggle('search-active')
  }

  const handleClickAddtoList = () => {
    const nowSelectedItem = document.querySelector('.result-card.search-active') 
    const nowCategoryId = localStorage.getItem('nowCategoryId') 
    const categories = JSON.parse(localStorage.getItem('Categories'))
    const newCategories = categories.map(category => {
      if(category.id === Number(nowCategoryId)){
        return (
          {...category, content:[
              ...category.content, { 
                id: nowSelectedItem.dataset.id,
              image: nowSelectedItem.dataset.img,
              artist: nowSelectedItem.dataset.name,
              title: nowSelectedItem.dataset.title
              }
          ]}
        )
      }
      return category
    })
    localStorage.setItem('Categories', JSON.stringify(newCategories))
  }

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
        ]}  />
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
              <p className="play-text-detail">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            <div className="player">
              <audio controls>
                <source src="https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
      <div className="blur-cover "></div>
      <div className="search-modal search-panel">
        <div className="modal-title">
          <h3>新增podcast</h3>
          <div>
            <a href='/main'>x</a>
          </div>
        </div>
        <hr />
        <input placeholder="開始搜尋" className="search-input" onChange={handleChangeInput} />
        <div className="yes-no">
        <div className="search-result">
          <AlbumCollection searchResult={albumList} onClick={handleClickSearchItem}/>
        </div>
        <div className="yes-no-panel">
          <div className="cancel" onClick={() => {navigate('/main')}}>取消</div>
          <div className="yes" onClick={handleClickAddtoList}>確認新增</div>
        </div>
        </div>
      </div>
    </>)
}