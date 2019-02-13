import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Root from './app/root'
import { store } from './store'

import registerServiceWorker from './sw'

render(
  <div>
    <Provider store={store}>
      <Root />
    </Provider>
  </div>,
  document.getElementById('root')
)

registerServiceWorker()
