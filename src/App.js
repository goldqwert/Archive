import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
        // setTimeout(() => {
        //     let newTask = { title: 'JS', isDone: true, priority: 'high' };
        //     let newTasks = [...this.state.tasks, newTask];
        //     this.setState({
        //         tasks: newTasks
        //     });
        // }, 2000);
    }

    state = {
        tasks: [
            { title: 'JS', isDone: true, priority: 'high' },
            { title: 'HTML', isDone: false, priority: 'medium' },
            { title: 'CSS', isDone: true, priority: 'low' },
            { title: 'React', isDone: true, priority: 'high' }
        ],
        filterValue: 'Active'
    }

    onAddTaskClick = () => {
        let newTask = { title: this.newTaskTitleRef.current.value, isDone: true, priority: 'high' };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        })
        this.newTaskTitleRef.current.value = '';

    }


    render = () => {
        return (
            <div className='App'>
                <div className='todoList'>
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name" />
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    {/* <TodoListHeader /> */}
                    <TodoListTasks tasks={this.state.tasks} />
                    <TodoListFooter filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

