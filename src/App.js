import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {

    state = {
        tasks: [
            { title: 'HTML', isDone: true, priority: 'medium' },
            { title: 'CSS', isDone: true, priority: 'medium' },
            { title: 'JS', isDone: true, priority: 'medium' },
            { title: 'React', isDone: false, priority: 'low' }
        ],
        filterValue: 'All'
    };

    newTaskTitleRef = React.createRef();

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        let newTask = {
            title: newText,
            isDone: true,
            priority: 'low'
        }
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
        this.newTaskTitleRef.current.value = '';
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    {/* <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input ref={this.newTaskTitleRef} type="text" placeholder="New task name" />
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div> */}
                    <TodoListHeader />
                    <TodoListTasks tasks={this.state.tasks.filter(t => {
                        switch (this.state.filterValue) {
                            case 'All': return true;
                            case 'Completed': return t.isDone;
                            case 'Active': return !t.isDone;
                            default: return true;
                        }
                    })} />
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

