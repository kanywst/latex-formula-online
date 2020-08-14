import React from 'react';
import './App.scss';
import InputFormula from './components/InputFormula'
import OutputFormula from './components/OutputFormula'
import ButtonFormula from './components/ButtonFormula'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


class App extends React.Component{
  constructor(props){
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      formula: "",
      val: "",
      json: require('./latex-commands.json')
    }
  }

  onTextChange(e){
    if(e.target.name === 'formula'){
      this.setState({
        'formula': e.target.value,
      });
    }
  }

  onButtonClick(e){
    if (e.target.value === undefined){
      return
    }else{
      console.log(e.target.value)
      this.setState({
        "formula": this.state.formula + e.target.value,
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
            <div className="latex-commands-button">
              {this.state.json.commands.symbol.map((m,i)=>{
                return <ButtonFormula onButtonClick={this.onButtonClick} key={i} command={m} />
              })}
              {this.state.json.commands.greek_lowcase.map((m,i)=>{
                return <ButtonFormula onButtonClick={this.onButtonClick} key={i} command={m} />
              })}
              {this.state.json.commands.greek_upcase.map((m,i)=>{
                return <ButtonFormula onButtonClick={this.onButtonClick} key={i} command={m} />
              })}
            </div>
          </Row>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <InputFormula onTextChange={this.onTextChange}/>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <OutputFormula formula={this.state.formula}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default App;
