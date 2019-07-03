import React from "react";

export default class ErrorLabel extends React.Component {
    render(){
        return(
            <div style={{ color: 'red' }}>
                {this.props.children}
            </div>
        );
    }
}
