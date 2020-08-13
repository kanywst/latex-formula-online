import React from 'react';

export default class OutPut extends React.Component{
    render(){
        return(
            <div className="OutputFormula">
                <div className="">
                    <p className="">{this.props.formula}</p>
                </div>
            </div>
        );
    }
}