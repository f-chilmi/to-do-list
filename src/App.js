import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

// import store
import store from './redux/store'

// import pages
import Home from './pages/Home'

export default class App extends Component {
  render() {
    // console.log(this.state)
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={(props)=><Home {...props} /> } exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}