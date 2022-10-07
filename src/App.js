import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './styles/main.scss'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    )
  }
}

export default App
