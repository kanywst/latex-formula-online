import React from "react";
import MathJax from 'react-mathjax2'


export default class ButtonFormula extends React.Component{
    render(){
        return(
            <button className="" onClick={this.props.onButtonClick} value={this.props.command}>
                <MathJax.Context input='ascii'>
                        <MathJax.Node inline>{ this.props.command }</MathJax.Node>
                </MathJax.Context>
            </button>
        )
    }
}