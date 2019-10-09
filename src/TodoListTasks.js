import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = (props) => {

        let tasksElements = this.props.tasks.map(el => <TodoListTask title={el.title} isDone={el.isDone} priority={el.priority} />)

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;

