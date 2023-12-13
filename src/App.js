import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'

import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
  }

  registerStateChange = (name, topic, bool) => {
    this.setState({
      name,
      topic,
      isRegistered: bool,
    })
  }

  render() {
    const {name, topic, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          registerStateChange: this.registerStateChange,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
