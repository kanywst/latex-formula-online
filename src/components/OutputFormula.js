import React from 'react';
import MathJax from 'react-mathjax2'


//var BlockMath = ReactKaTeX.BlockMath;

export default class OutputFormula extends React.Component{
    render(){
        return(
            <div className="OutputFormula">
                <div className="">
                    <p className="">
                        <MathJax.Context input='tex'>
                            <div>
                                <MathJax.Node>{this.props.formula}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                    </p>
                </div>
            </div>
        );
    }
}