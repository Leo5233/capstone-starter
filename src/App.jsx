import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage'
import { EntrancePage } from './pages/EntrancePage'
import { SignUpPage } from './pages/SignupPage'
import { SearchPage } from './pages/Search'
import { MainPage } from './pages/MainPage'
import { TrackPage } from './pages/TrackPage'

function App() {

  return (
    <>
      <BrowserRouter >
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="entrance" element={<EntrancePage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="track" element={<TrackPage />} />
            <Route path="*" element={<EntrancePage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
