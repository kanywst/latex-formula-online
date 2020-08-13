import React from "react";

export default class InputFormula extends React.Component {
    render(){
        return(
            <div className="InputFormula">
                <div className="">
                    <textarea name='formula' className="" onChange={this.props.onTextChange}/>
                    <button className="" onClick={this.props.onButtonClick}>Create</button>
                </div>
            </div>
        );
    }
}