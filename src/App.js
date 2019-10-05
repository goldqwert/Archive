import React from 'react';
import './App.css';
import './TodoListHeader';
import './TodoListTasks';
import './TodoListFooter';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    tasks = [
        { title: 'JS', isDone: true, priority: 'high' },
        { title: 'HTML', isDone: true, priority: 'medium' },
        { title: 'CSS', isDone: true, priority: 'low' },
        { title: 'React', isDone: false, priority: 'high' }
    ];

    filterValue = 'All';
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks} />
                    <TodoListFooter filterValue={this.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;