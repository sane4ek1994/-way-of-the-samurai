import { Routes, Route } from 'react-router-dom'
import { Header, Navbar, Footer } from './components'
import { Profile, News, SettingPage, Music } from './pages'
import { MessagesContainer } from './pages/Messages/MessagesContainer'

import './App.css'

const App = (props: any) => {
  const friendsData = props.store.getState().asideReducer.friendsData
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsData={friendsData} />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Profile store={props.store} />} />
          <Route path='/messages' element={<MessagesContainer store={props.store} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<SettingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
