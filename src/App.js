import React from 'react'
import Home from './home'
import Header from './Header'

class App extends React.Component {
  render() {
    return(
      <div>
          <Header />
        <p>
          hello world
        </p>
        <Home></Home>
      </div>
    ) 
  }
}

export default App