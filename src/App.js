import React, {Component} from 'react'
import MyForm from './components/MyForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container'

class App extends Component {
  render(){
    return(
      <Container>
        <MyForm/>
      </Container>
    )
  }
}

export default App;