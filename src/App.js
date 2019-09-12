import React from 'react'
import Home from './Home'
import Header from './Header'

class App extends React.Component {
  render() {
    return(
      <div>
          <Header />
          <br></br>
          <Home />
      </div>
    ) 
  }
}

export default App