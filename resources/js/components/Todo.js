import React from "react";
import ReactDOM from "react-dom";
import TaskInput from "./todo_parts/taskinput.js";
import TaskList from "./todo_parts/taskslist.js";

class Todo extends React.Component {
    state = {
        name: 'Todo list',
        tasks: [
            'Lorem ipsum dolor sit amet.',
            'Voluptatum in blanditiis tempora',
            'Consectetur, adipisicing elit'
        ],
        accion: 0,
    }
    agregartarea = (tarea)=>{
        var tasks = this.state.tasks;
        tasks.push(tarea);
        this.setState({
            tasks: tasks,
            accion: 1
        });
    }
    eliminarTarea = (id)=>{
        var tasks = this.state.tasks;
        tasks.splice(id, 1);
        this.setState({
            tasks: tasks,
            accion: 2
        });
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <TaskInput agregartarea={this.agregartarea}/>
                    <TaskList tasks={this.state.tasks} eliminartarea={this.eliminarTarea} accion={this.state.accion}/>
                </div>
            </div>
        );
    }
}

if(document.getElementById('todo')){
    ReactDOM.render(<Todo />, document.getElementById('todo'));
}
