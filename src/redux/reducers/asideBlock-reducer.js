const initialState = {
  friendsData: [
    {
      id: '1',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvwaJplxvK3UtOeCatI2g-gJCt-xRwo1C8g&usqp=CAU',
      name: 'Lev'
    },
    {
      id: '2',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YOcpPB1PxeJtAIyasitboh8RKkSFcCmNw&usqp=CAU',
      name: 'Alex'
    },
    {
      id: '3',
      src: 'https://img3.goodfon.ru/wallpaper/nbig/8/cd/spanch-bob-gubka-bob.jpg',
      name: 'Ksss'
    }
  ]
}

export const asideReducer = (state = initialState, action) => {
  return state
}
