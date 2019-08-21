import React, { Component} from 'react';
import './App.css';

import tasks from './sample/tasks'
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts';


class App extends Component {

  state = {
    tasks: tasks
  }
  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length + 1,
      done: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deletedTask= (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTask
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({
      tasks: newTasks
    })
  }

  render () {
    return  <React.Fragment>
        <div className="container">
          <div className="row justify-content-center" >
            <div className="col-11 col-sm-11 col-lg-4">
              <TaskForm addTask={this.addTask}/>
            </div>
            <div className="col-11 col-sm-11 col-lg-4">
              <div className="row justify-content-center">
                <Tasks className="col-11 col-sm-11 col-lg-4"
                tasks={this.state.tasks}
                deletedTask={this.deletedTask}
                checkDone={this.checkDone}
              />
              </div>
            
            </div>
          </div>
        </div>
      </React.Fragment>
    
  }
}

export default App;
