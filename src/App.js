import React from 'react';
import './App.scss';
import InputFormula from './components/InputFormula'
import OutputFormula from './components/OutputFormula'
import ButtonFormula from './components/ButtonFormula'
import { Container, Row, Col } from 'react-bootstrap'


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
              {this.state.json.commands.arrow.map((m,i)=>{
                return <ButtonFormula onButtonClick={this.onButtonClick} key={i} command={m} />
              })}
              {this.state.json.commands.formula.map((m,i)=>{
                return <ButtonFormula onButtonClick={this.onButtonClick} key={i} command={m} />
              })}
            </div>
          </Row>
          <Row>
              <Col md="5">
                <InputFormula formula={this.state.formula} onTextChange={this.onTextChange}/>
              </Col>
              <Col md="5">
                <OutputFormula formula={this.state.formula}/>
              </Col>
          </Row>
        </Container>
        <footer class="page-footer font-small">
          <div class="footer-copyright text-center py-3">
            <a href="https://github.com/kanywst/latex-formula-online">Github</a>
          </div>
        </footer>
      </div>
    )
  }
}
export default App;
