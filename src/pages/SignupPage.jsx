import '../css/Login.scss'
import { AlphaLogo } from '../components/AlphaLogo'
import { SlideImg } from '../components/SlideImg'
import { AuthInput } from '../components/AuthInput'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignUpPage = () => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [photoId, setPhotoId] = useState(1)
  const navigate = useNavigate()
  const handleClickBar = (e) => {
    setPhotoId(e.target.dataset.id)
  }
  const handleClickArrowPlus = () => {
    const items = document.querySelectorAll('.slide-bar')
    console.log(items.length)
    if (photoId < items.length) {
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
          <AuthInput label="暱稱" placeholder="請輸入暱稱"
            onChange={(value) => setName(value)}
          />
          <AuthInput label="帳號" placeholder="請輸入帳號"
            onChange={(value) => setUserName(value)}
          />
          <AuthInput label="信箱" placeholder="請輸入信箱"
            onChange={(value) => setEmail(value)}
          />
          <AuthInput type="password" label="密碼" placeholder="請輸入密碼"
            onChange={(password) => setPassword(password)}
          />
          <button className='login-btn' onClick={() => navigate('/login')}>註冊</button>
          <h6 className='signup-text'>已經有帳號嗎？<span onClick={() => navigate('/login')} >點此登入</span></h6> 
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