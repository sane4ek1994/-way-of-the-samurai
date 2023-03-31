import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './redux/redux-store'
// import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

let rerenderEntireTree = (state: any) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
  rerenderEntireTree(store.getState())
})
