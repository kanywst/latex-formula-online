import React from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default class ButtonFormula extends React.Component{
    render(){
        return(
            <button className="" onClick={this.props.onButtonClick} value={this.props.command}>
                <InlineMath math={` ${this.props.command} `}>
                </InlineMath>
            </button>
        )
    }
}