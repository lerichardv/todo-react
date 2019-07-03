import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import { TimelineMax } from "gsap/all";

// Local imports
import Validations from "../helpers/validations.js";

export default class TaskInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: ''
        }
        this.input = React.createRef();
    }
    handleInputChange = (e)=>{
        this.setState({
            current: e.target.value
        });
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.runAnimation();
        this.props.agregartarea(this.state.current);
        this.setState({
            current: ''
        });
    }
    runAnimation = ()=>{
        var tl = new TimelineMax({
            paused: true
        });
        tl.fromTo(this.input.current, 0.3, { y:'0%', opacity: 1 }, { y:'50%', opacity: 0 });
        tl.fromTo(this.input.current, 0.3, { y: '-50%', opacity: 0 }, { y: '0%', opacity: 1 });
        tl.play();
    }
	render(){
        return(
            <Form onSubmit={this.handleSubmit} action="#!">
                <div className="form-group">
                    <div ref={this.input}>
                        <Input type="text" placeholder="Ingrese una tarea" className="form-control"
                            name="task"
                            value={this.state.current}
                            onChange={this.handleInputChange}
                            minLength="6"
                            maxLength="50"
                            validations={[Validations.required, Validations.minLength, Validations.maxLength ]}
                        />
                    </div>
                    <small id="emailHelp" className="form-text text-muted float-right">{this.state.current.length}/50</small>
                </div>
                <div className="form-group">
                    <Button className="btn btn-success">Agregar tarea</Button>
                </div>
            </Form>
        );
    }
}
