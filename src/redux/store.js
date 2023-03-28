import { asideReducer, dialogsReducer, postReducer } from './reducers'

export const store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        {
          id: '1',
          name: 'Alex',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU'
        },
        {
          id: '2',
          name: 'Ksuxa',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU'
        },
        {
          id: '3',
          name: 'Lev',
          src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg'
        },
        {
          id: '4',
          name: 'Maatvey',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU'
        },
        {
          id: '5',
          name: 'Andrey',
          src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg'
        }
      ],
      messages: [
        { id: '1', message: 'Hello!' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Yo!!' },
        { id: '4', message: 'qq!)' }
      ],
      newMessageBody: 'react Yo!'
    },
    postsPage: {
      postData: [
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
          text: 'Hello! I Alex!'
        },
        { src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg', text: 'QQ' },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU',
          text: 'What is your nature name?'
        }
      ],
      postText: 'alone samuray way |`_`|'
    },
    asideBlock: {
      friendsData: [
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU',
          name: 'Lev'
        },
        {
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
          name: 'Alex'
        },
        {
          src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg',
          name: 'Ksss'
        }
      ]
    }
  },

  _callSubscriber() {
    console.log('State changed')
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  getState() {
    return this._state
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.postsPage = postReducer(this._state.postsPage, action)
    this._state.asideBlock = asideReducer(this._state.asideBlock, action)

    this._callSubscriber(this._state)
  }
}

window.store = store
