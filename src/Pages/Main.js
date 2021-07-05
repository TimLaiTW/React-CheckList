import React from 'react';
import styled from 'styled-components';
// import TodoForm from './todoform';
// import AddItem from '../components/AddItem';
// import ShowTask from './showtask';
const Div = styled.div`
    margin-left: 25%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color:var(--text);
    `;
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskList: [],
            showAddingTask: false
        }
    }

    startAddingTask = () => {
        this.setState({
            showAddingTask: true
        })
    }

    addTask = (task) => {
        var selectedList = this.state.taskList.find(todo => todo.id === this.props.id);

        if (typeof(selectedList) === 'undefined'){
            selectedList = {
                id: this.props.id,
                tasks: []
            }
        }

        selectedList.tasks = [...selectedList.tasks, task]
        
        var updatedList = this.state.taskList.map(tasks => {
            if(tasks.id === this.props.id){
                return selectedList
            }
            return tasks
        })    

        if(!updatedList.find(list => list.id === this.props.id)){
            updatedList = [...updatedList, selectedList]
        }
   
        this.setState({
            taskList: updatedList,
            showAddingTask: false
        })
    }

    deleteTask = (taskId) => {
        var selectedList = this.state.taskList.find(todo => todo.id === this.props.id);
        selectedList.tasks = selectedList.tasks.filter((task => task.taskId !== taskId))
        const updatedList = this.state.taskList.map(tasks => {
            if(tasks.id === this.props.id){
                return selectedList
            }
            return tasks
        })
        this.setState({
            taskList: updatedList
        })
    };
        
    editTaskName = (taskId, name) => {
        var selectedList = this.state.taskList.find(todo => todo.id === this.props.id);
        selectedList.tasks = selectedList.tasks.map(task => {
            if (task.taskId === taskId){
                return {...task, task: name}
            }
            return task;
        });
        const updatedList = this.state.taskList.map(tasks => {
            if(tasks.id === this.props.id){
                return selectedList
            }
            return tasks
        })
        this.setState({
            taskList: updatedList
        })
    };
        
    editTaskCheck = (taskId, check) => {
        var selectedList = this.state.taskList.find(todo => todo.id === this.props.id);
        selectedList.tasks = selectedList.tasks.map(task => {
            if (task.taskId === taskId){
                return {...task, checked: check}
            }
            return task;
        });
        const updatedList = this.state.taskList.map(tasks => {
            if(tasks.id === this.props.id){
                return selectedList
            }
            return tasks
        })
        this.setState({
            taskList: updatedList
        })

        console.log(this.state.taskList)
    };

    render(){
        const {id, title} = this.props
        var selectedList = this.state.taskList.find(todo => todo.id === id);
        if(selectedList){selectedList["tasks"].map(task => console.log(task.task))}

        if (!this.props.title){
            return (
                <Div>
                    <h1 className='header'>
                        To Do List
                    </h1>
                </Div>
            )
        }
        return (
            <Div> 
                <h1 className='header'>
                    {title}
                </h1>
                
                {/* {typeof(selectedList) !== 'undefined' &&
                    <ShowTask 
                        taskList={selectedList.tasks}
                        deleteTask={this.deleteTask}
                        editTaskName={this.editTaskName}
                        editTaskCheck={this.editTaskCheck}
                    />
                } */}

                {/* {!this.state.showAddingTask && 
                <AddItem startAddingTask={this.startAddingTask}>Add new task</AddItem>}
                {this.state.showAddingTask && 
                <TodoForm onSubmit={this.addTask}/>} */}
            </Div>

        )
    }   
}