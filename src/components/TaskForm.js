import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()   
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render (){
        return (
            <React.Fragment>
                <div className="card mt-3">
                    <div className="card-header text-center">
                        <h1>Add tasks</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <input onChange={this.onChange}
                                value={this.state.title}
                                type="text" name="title"
                                placeholder="write a tasks"
                                className="form-control"/>
                            <br/><br/>
                            <textarea onChange={this.onChange}
                                value={this.state.description}
                                name="description"
                                placeholder="write a description" rows="2"
                                className="form-control">
                            </textarea>
                            <br/><br/>
                            <button type="submit" className="form-control btn btn-primary">Save Task</button>
                        </form>
                    </div>
                </div>
            
            </React.Fragment>
        )
    }
}