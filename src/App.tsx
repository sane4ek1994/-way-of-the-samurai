import { Routes, Route } from 'react-router-dom'
import { Header, Navbar, Footer } from './components'
import { Messages, Profile, News, SettingPage, Music } from './pages'

import './app.css'

function App(props: any) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsData={props.state.asideBlock.friendsData} />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <Profile
                posts={props.state.postsPage.postData}
                postText={props.state.postsPage.postText}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path='/messages'
            element={
              <Messages
                store={props.store}
                dispatch={props.dispatch}
                dialogs={props.state.dialogsPage.dialogsData}
                messages={props.state.dialogsPage.messages}
              />
            }
          />
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
