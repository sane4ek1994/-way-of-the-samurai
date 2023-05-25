import { postReducer, addPosts, removePost } from './postPage-reducer'

test('New post shold be added, length of posts to be incremented', () => {
  // 1. Testing data
  let action = addPosts('samyrai-js')
  let state = {
    postData: [
      {
        id: '1',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
        text: 'Hello! I Alex!'
      },
      { id: '2', src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg', text: 'QQ' },
      {
        id: '3',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU',
        text: 'What is your nature name?'
      }
    ]
  }
  // 2. Action
  let newState = postReducer(state, action)

  // 3. Expectation

  expect(newState.postData.length).toBe(4)
})

/// TDD usage

test('After deleted length of message should be decrement', () => {
  // 1. Testing data
  let action = removePost(1)
  let state = {
    postData: [
      {
        id: '1',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
        text: 'Hello! I am Alex!'
      },
      { id: '2', src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg', text: 'QQ' },
      {
        id: '3',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCat2g-gJCt-xRwo1C8g&usqp=CAU',
        text: 'What is your nature name?'
      }
    ]
  }

  // 2. Action
  let newState = postReducer(state, action)

  // 3. Expectation

  expect(newState.postData.length).toBe(3)
})
