import { AlphaLogo } from '../components/AlphaLogo'
import '../css/Main.scss'
import { CategoryCollection } from '../components/Category'
import { CenterContent } from '../components/CenterContent'
import { NowPlayItem } from '../components/NowPlayItem'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const staticPodcast = JSON.parse(localStorage.getItem('staticPodcast'))
const dummyCategory = [
  { id: 1, title: '通勤清單', src: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/commute.png', content: []},
  { id: 2, title: '讀書清單', src: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/study.png', content: [] },
  { id: 3, title: '睡前清單', src: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/sleep.png', content: [] },
  { id: 4, title: '我的Podcast', src: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/home.png', content: [] },
  { id: 99, title: '已收藏', src: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/heart.png', content: [] }
]

//count the coordination of an element
function getPosition(element) {
  let x = 0;
  let y = 0;
  while (element) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}

export const MainPage = () => {
  const [nowCategoryId, setNowCategoryId] = useState(99)
  const [inputCategoryName, setInputCategoryName] = useState('')

  const [categories, setCategories] = useState(JSON.parse(localStorage.getItem('Categories')))
  const [nowPlayItemInfo, setNowPlayItemInfo] = useState({
    title: "Starting Your Own Podcast: Tips, Tricks and Advice From Anchor...",
    name: "Seinobo Sey",
    image: "src/assets/cover2.png",
    duration: '4800000'
  })
  const [nowCategoryName, setNowCategoryName] = useState('')
  const navigate = useNavigate()
//use dummyCategories can reset categories to default

    const localCategories = JSON.parse(localStorage.getItem('Categories'))
    const localCategoryId = localStorage.getItem('nowCategoryId')
    console.log(localCategories)
    console.log(localCategoryId)
    if(!localCategories){
      localStorage.setItem('Categories', JSON.stringify(dummyCategory))
    }
    if(!localCategoryId){
      localStorage.setItem('nowCategoryId', 99)
    } else {
      console.log('localCategoryId',localCategoryId)
    }


  //click different category and change the style by 'active' className
  const handleClickCategory = (e) => {
    if (e.target.className === 'action-scope'){
      const nowCategory = document.querySelector('.category.active')
      if (nowCategory){nowCategory.classList.remove('active')}
      e.target.parentElement.parentElement.classList.add('active')
      setNowCategoryName(e.target.dataset.title)
      setNowCategoryId(Number(e.target.dataset.id))
      localStorage.setItem('nowCategoryId', Number(e.target.dataset.id))
    }
  }

  //click and show panel with edit, delete, add function
  const handleClickEdit = (e) => {
    if (e.target.className === 'panel-action-scope'){
      const editPanel = document.querySelector('.edit-panel')
      editPanel.classList.toggle('d-none')
      let position = getPosition(e.target)
      editPanel.style.top = position.y  + "px";
      editPanel.style.left = (position.x + 20) + "px";
      //按下點點視同新的被選中的category 隨之更換樣式
      const nowCategory = document.querySelector('.category.active')
      nowCategory.classList.remove('active')
      e.target.parentElement.parentElement.parentElement.classList.add('active')
      //傳遞給CenterContent使用
      setNowCategoryName(e.target.dataset.title)
      setNowCategoryId(Number(e.target.dataset.id))
      localStorage.setItem('nowCategoryId', Number(e.target.dataset.id))
    }
  }

  const handleShowModal = (e) => {
    const blurcover = document.querySelector('.blur-cover')
    const editPanel = document.querySelector('.edit-panel')
    const name = e.target.className.split('-')[0] //[edit]-category, [delete]-category, [add]-category
    const modal = document.querySelector(`.${name}-modal`)
    blurcover.classList.toggle('d-none')
    editPanel.classList.add('d-none')
    modal.classList.toggle('d-none')
  }

  // click cancel or x to go back to main page
  const handleClickGoBack = () => {
    const blurcover = document.querySelector('.blur-cover')
    const modals = document.querySelectorAll('.modal-panel')
    modals.forEach( modal => {
      modal.classList.add('d-none')
    })
    blurcover.classList.toggle('d-none')
  }

  const handleChangeInput = (e) => { setInputCategoryName(e.target.value) }

  //add new category 
  const handleClickSaveAdd = () => {
    const newCategories = [...categories, {
      id: categories.length + 1,
      title: inputCategoryName,
      src: 'https://raw.githubusercontent.com/Leo5233/Spotify-capstone/master/src/assets/home.png',
      content: []
    }]
    localStorage.setItem('Categories', JSON.stringify(newCategories))
    setCategories(newCategories)
    handleClickGoBack()
  }

  //edit the name of a category
  const handleClickSaveEdit = () => {
    const newCategories = categories.map(category => {
      if (category.id === nowCategoryId) {
        return {
          ...category,
          title: inputCategoryName
        }
      }
      return category
    }) 
    localStorage.setItem('Categories', JSON.stringify(newCategories))
    setCategories(newCategories)
    handleClickGoBack()
  }

  const handleDeleteCategory = () => {
    //刪除後就回到已收藏類別，且已收藏不能刪除
    if(nowCategoryId !== 99){
      const newCategories = categories.filter(category => category.id !== nowCategoryId)
      localStorage.setItem('Categories', JSON.stringify(newCategories))
      setCategories(newCategories)
      setNowCategoryName('已收藏')
      setNowCategoryId(99)
      localStorage.setItem('nowCategoryId', 99)
      handleClickGoBack()
    } else {
      alert('此類別不可刪除')
    }
  }

  const handleClickMore = (e) => {
    localStorage.removeItem('albumId')
    localStorage.removeItem('albumIcon')
    localStorage.setItem('albumId', e.target.dataset.id)
    localStorage.setItem('albumIcon', e.target.dataset.url)
    navigate('/track')
  }

  const handleClickPlay = (e) => {
    const nowPlayItem = document.querySelector('.play-active')
    const player = document.querySelector('.nowPlayer')
    const target = e.target.dataset.url
    if (nowPlayItem && nowPlayItem !== e.target) {
      nowPlayItem.classList.remove('play-active')
    }
    //有的track沒有音檔連結就不變換圖示
    if (target) {
      e.target.classList.toggle('play-active')
    }
    //播放中點擊另一個則載入新track
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
    if (!nowPlayItem) {
      player.src = target
      player.load()
      player.play()
    }    
    setNowPlayItemInfo({
      title: e.target.dataset.title,
      artist: e.target.dataset.name,
      image: e.target.dataset.img,
      duration: e.target.dataset.time
    })

    //播放項目加邊框
    const oldAcitveItem = document.querySelector('.active')
    if(oldAcitveItem){ oldAcitveItem.classList.remove('active')}
    e.target.parentElement.parentElement.parentElement.classList.add('active')

  }


  const handleClickToggleSubscribe = (e) => {
    const targetClass = [...e.target.classList]
    const subscribedList = JSON.parse(localStorage.getItem('subscribed'))
    let newSubscribedList = []
    if (targetClass.includes('subscribed')) { //unsubscribe   
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

  const handleClickLogout = () => {
    localStorage.setItem('nowCategoryId', 99)
    navigate('/login')
  }

  return (<>
    <div className="entrance-container">
      <div className="main-left">
        <AlphaLogo width={'150px'} />
        <hr />
        <CategoryCollection 
        categories={categories} 
        onClick={handleClickCategory}
        onClickToggle={handleClickEdit}/>
        <div className="add-category" onClick={handleShowModal}>+ &nbsp;新增分類</div>
      </div>
      <div className="main-center">
        <h2>早安</h2>
          <CenterContent 
          dummyCategory={dummyCategory} 
          onClickMore={handleClickMore}
          onClickPlay={handleClickPlay}
          onClickSubscribe={handleClickToggleSubscribe}/>
      </div>
      <div className="main-right">
        <div className="profile">
          <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="" className="avatar" />
          <h3 className="username">John Don</h3>
        </div>
        <div className="logout" onClick={handleClickLogout}>
          登出
        </div>
        <NowPlayItem nowPlayItemInfo={nowPlayItemInfo}/>
      </div>
    </div>
    {/* all element below are not visible by default */}
    <div className="edit-panel d-none">
      <div className="edit-category" onClick={handleShowModal}>編輯分類</div>
      <hr/>
      <div className="delete-category" onClick={handleShowModal}>刪除分類</div>
      <hr/>
      <div className="add-item" onClick={handleShowModal}>新增podcast</div>
    </div>
    <div className="blur-cover d-none"></div>
    {/* three different modal for edit, delete, add */}
    <div className="edit-modal modal-panel d-none">
      <div className="modal-title">
        <h3>編輯分類</h3><div onClick={handleClickGoBack}>x</div>
      </div>
      <hr />
      <input placeholder="我的Podcast"  className="edit-input" onChange={handleChangeInput} />
      <div className="yes-no">
        <div className="cancel" onClick={handleClickGoBack}>取消</div>
        <div className="yes" onClick={handleClickSaveEdit}>儲存</div>
      </div>
    </div>
    <div className="delete-modal modal-panel d-none">
      <div className="modal-title">
        <h3>刪除分類</h3><div onClick={handleClickGoBack}>x</div>
      </div>
      <hr />
      <div>是否確定刪除&quot;{nowCategoryName}&quot;分類？</div>
      <div className="yes-no">
        <div className="cancel" onClick={handleClickGoBack}>取消</div>
        <div className="yes" onClick={handleDeleteCategory}>刪除</div>
      </div>
    </div>
    <div className="add-modal modal-panel d-none">
      <div className="modal-title">
        <h3>新增分類</h3><div onClick={handleClickGoBack}>x</div>
      </div>
      <hr />
      <input placeholder="請輸入名稱" className="edit-input" onChange={handleChangeInput} />
      <div className="yes-no">
        <div className="cancel" onClick={handleClickGoBack}>取消</div>
        <div className="yes" onClick={handleClickSaveAdd}>儲存</div>
      </div>
    </div>
  </>)
}
