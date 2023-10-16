
import '../css/Entrance.scss'
import { AlphaLogo } from '../components/AlphaLogo'
import { SlideImg } from '../components/SlideImg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const EntrancePage = () => {
  const navigate = useNavigate()
  const [photoId, setPhotoId] = useState(1)
  const handleClickBar = (e) => {
    setPhotoId(e.target.dataset.id)
  }
  const handleClickArrowPlus = () => {
    const items = document.querySelectorAll('.slide-bar')
    console.log(items.length)
    if (photoId < items.length){
      setPhotoId(Number(photoId) + 1)
    }
  }
  const handleClickArrowMinus = () => {
    if (photoId > 1) {
      setPhotoId(Number(photoId) - 1)
    }
  }
  return (<>
    <div className="entrance-container">
      <div className="entrance-left-contentbox">
        <div className="entrance-left-content">
          <AlphaLogo width={'300px'} />  
          <h5 className='entrance-logo-title'>Connecting Stories That Matter</h5>     
          <button className='login-btn' onClick={() => navigate('login')}>使用SPOTIFY帳號登入</button> 
          <h6 className='signup-text'>沒有帳號嗎？<a href="signup">註冊帳號</a></h6> 
        </div>
      </div>
      <div className="entrance-right-contentbox">
        <SlideImg 
          photoId={photoId}
          handleClickArrowMinus={handleClickArrowMinus}
          handleClickArrowPlus={handleClickArrowPlus}
          handleClickBar={handleClickBar}
        />
      </div>
    </div>
  </>)
}
