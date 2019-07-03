import React from "react";
import { TweenMax } from "gsap/all";

export default class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.last = React.createRef();
    }
    componentDidUpdate = ()=>{
        if(this.props.accion == 1) this.runAddAnimation();
        if(this.props.accion == 2) this.runRemoveAnimation();
    }
    runAddAnimation = ()=>{
        if(this.last.current) TweenMax.fromTo(this.last.current, 0.3, {y:'-100%'}, {y: '0%'});
    }
    runRemoveAnimation = (elem)=>{
        if (elem) TweenMax.fromTo(elem.parentNode, 0.3, { scale: 1, opacity: 1 }, { scale: 0.8, opacity: 0, onComplete: ()=>{
            this.deleteElement(elem);
            TweenMax.set(elem.parentNode, { scale: 1, opacity: 1});
        }});
    }
    deleteElement = (elem)=>{
        this.props.eliminartarea(elem.getAttribute('remove'));
    }
    render(){
        return(
            <ul className="list-group">
                {
                    this.props.tasks.length > 0 ?
                    this.props.tasks.map((t, i)=>{
                        return (
                            <li className="list-group-item" key={i}
                                ref={(this.props.tasks.length-1)==i ? this.last : null}
                                style={null}>
                                {t} <a href="#!" className="float-right btn btn-link p-0"
                                remove={i}
                                onClick={(e) => {
                                    this.runRemoveAnimation(e.target);
                                }}>Eliminar</a>
                            </li>
                        );
                    }) :
                    <div className="alert alert-warning mb-0" role="alert">
                        No hay tareas agregadas
                    </div>
                }
            </ul>
        );
    }
}
