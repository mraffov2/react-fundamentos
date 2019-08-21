import React, { Component } from 'react';

class Task extends Component {

    done() {
        return {
            color: this.props.task.done ? 'green' : ''
        }
    }

    render(){
        const {task} = this.props;
        
        return <div className="mt-3 mb-3 ml-2 mr-2">
            <div className="card text-center" style={this.done()}>
                <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <input  type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>Done<br/>
                <button className="btn btn-danger mt-2" onClick={this.props.deletedTask.bind(this, task.id)}>Deleted</button>
                </div>  
            </div>   
        </div>
    }
}

export default Task