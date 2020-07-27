import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import App from './modules/App'
import GlobalStyles from './globalStyles'
import * as serviceWorker from './utils/serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <GlobalStyles />
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
