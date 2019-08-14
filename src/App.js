import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes/'
import store from './store/index'
import { GlobalStyl } from './style'
import { IconStyle } from './assets/incoFont/iconfont'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyl />
        <IconStyle />
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </div>
    </Provider>
  )
}

export default App
