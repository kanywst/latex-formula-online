import React from "react";

export default class InputFormula extends React.Component {
    render(){
        return(
            <div className="InputFormula">
                <div className="">
                    <textarea name='formula' className="" onChange={this.props.onTextChange}/>
                </div>
            </div>
        );
    }
}