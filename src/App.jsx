import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { News, SettingPage, Music, Login } from './pages'
import ProfileContainer from './pages/Profile/profileContainer'
import { MessagesContainer } from './pages/Messages/MessagesContainer'
import { UsersContainer } from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/headerContainer'
import {Component} from "react";
import {connect} from "react-redux";

import {withRouter} from "./utils/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/app-Reducer";
import './App.css'
import {Loader} from "./common/preloader/loader";




class App extends Component {
    componentDidMount() {
    this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
        return <Loader/>
        }

        const friendsData = this.props.store.getState().asideReducer.friendsData
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar friendsData={friendsData}/>
                <main className='main'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer store={this.props.store}/>}/>
                        <Route path='/users' element={<UsersContainer store={this.props.store}/>}/>
                        <Route path='/messages' element={<MessagesContainer store={this.props.store}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<SettingPage/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appReducer.initialized
    }
}

export default compose(withRouter,connect(mapStateToProps, {initializeApp}))(App)
