import { Routes, Route } from 'react-router-dom'
import { Header, Navbar, Footer } from './components'
import { Messages, Profile, News, SettingPage, Music } from './pages'

import './App.css'

function App(props: any) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friendsData={props.state.asideReducer.friendsData} />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <Profile
                posts={props.state.postReducer.postData}
                postText={props.state.postReducer.postText}
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
                dialogs={props.state.dialogsReducer.dialogsData}
                messages={props.state.dialogsReducer.messages}
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
