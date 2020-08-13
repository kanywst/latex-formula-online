import React from 'react';
import './App.scss';
import InputFormula from './components/InputFormula'
import OutputFormula from './components/OutputFormula'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


class App extends React.Component{
  constructor(props){
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.state = {
      formula: ""
    }
  }

  onTextChange(e){
    if(e.target.name === 'formula'){
      this.setState({
        'formula': e.target.value,
      });
    }
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h1>Latex Formula Online</h1>
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <InputFormula onTextChange={this.onTextChange}/>
            </Col>
            <Col md={4}>
              <OutputFormula formula={this.state.formula}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default App;
