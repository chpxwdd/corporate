import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './components/Root'
import { store } from './store/configureStore'

import registerServiceWorker from './registerServiceWorker'

render(
  <div>
    <Provider store={store}>
      <Root />
    </Provider>
  </div>,
  document.getElementById('root')
)

registerServiceWorker()
