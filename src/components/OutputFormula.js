import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

//var BlockMath = ReactKaTeX.BlockMath;

export default class OutputFormula extends React.Component{
    render(){
        return(
            <div className="OutputFormula">
                <div className="">
                    <p className="">
                        <BlockMath math={` ${this.props.formula} `}></BlockMath>
                    </p>
                </div>
            </div>
        );
    }
}