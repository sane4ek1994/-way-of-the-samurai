import { Routes, Route } from 'react-router-dom'
import { Header, Navbar, Footer } from './components'
import { MessagesContainer, Profile, News, SettingPage, Music } from './pages'

import './App.css'

function App(props: any) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsData={props.state.asideReducer.friendsData} />
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
