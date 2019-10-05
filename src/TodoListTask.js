import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    render = () => {
        return (
            <div className="todoList-task">
                <div className="todoList-task">
                    <input type="checkbox" checked={this.props.isDone} />
                    <span>{this.props.title}, {this.props.priority}</span>
                </div>
            </div>
        );
    }
}

export default TodoListTask;