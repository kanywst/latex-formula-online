import React from 'react';
import './App.css';
import InputFormula from './components/InputFormula'
import OutputFormula from './components/OutputFormula'

class App extends React.Component{
  constructor(props){
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
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

  onButtonClick(){
    if(this.state.formula === ""){
      alert('formula empty')
      return
    }
  }

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h1>Latex Formula Online</h1>
        </div>
        <InputFormula onTextChange={this.onTextChange} onButtonClick={this.onButtonClick}/>
        <OutputFormula formula={this.state.formula}/>
      </div>
    )
  }
}
export default App;
