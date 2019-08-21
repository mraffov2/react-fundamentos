import React,  { Component } from 'react';
import Task from './Task'

class Tasks extends Component {
    
    render (){
        return  this.props.tasks.map(task => 
        <Task 
            key={task.id} 
            task={task}
            deletedTask={this.props.deletedTask} 
            checkDone={this.props.checkDone}
        />)
    }
}

export default Tasks