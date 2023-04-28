import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { News, SettingPage, Music } from './pages'
import ProfileContainer from './pages/Profile/profileContainer'
import { MessagesContainer } from './pages/Messages/MessagesContainer'
import { UsersContainer } from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/headerContainer'

import './App.css'

const App = (props: any) => {
  const friendsData = props.store.getState().asideReducer.friendsData
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar friendsData={friendsData} />
      <main className='main'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer store={props.store} />} />
          <Route path='/users' element={<UsersContainer store={props.store} />} />
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
