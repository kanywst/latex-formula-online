import React from "react";
import MathJax from 'react-mathjax2'
import { Button } from 'react-bootstrap'


export default class ButtonFormula extends React.Component{
    render(){
        return(
            <Button className="" onClick={this.props.onButtonClick} value={this.props.command} variant="light">
                <MathJax.Context input='tex'>
                    <MathJax.Node inline>{ this.props.command }</MathJax.Node>
                </MathJax.Context>
            </Button>
        )
    }
}