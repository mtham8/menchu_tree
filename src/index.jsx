import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import swal from 'sweetalert'

import NavContainer from './navigation/NavContainer'
import { store } from './redux/configureStore'
import './styles/base.scss'

const mute = (function () {
  const iterateLogs = function (config) {
    for (let prop in console) {
      config.iteratee(prop)
    }
  }
  const noop = function () {}
  const logs = function (muted) {
    var muted = typeof muted !== 'undefined' ? muted : false
    iterateLogs({
      iteratee: function (prop) {
        if (muted === true) console[prop] = noop
        else if (muted === false) delete console[prop]
      }
    })
  }
  return { logs }
})()

// suppress all logs in production mode
if (process.env.NODE_ENV === 'production') mute.logs(true)

const Client = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavContainer />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Client />, document.getElementById('client'))
