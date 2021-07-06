import React from 'react';
import styled from 'styled-components';
import AddButton from '../Components/Actions/AddButton';
import InputForm from '../Components/Templates/InputForm';
import ShowTaskLists from '../Components/Templates/ShowTaskLists';
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
        selectedList.tasks = selectedList.tasks.filter((task => task.id !== taskId))
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
            if (task.id === taskId){
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
            if (task.id === taskId){
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
    };

    render(){
        const {id, title} = this.props
        var selectedList = this.state.taskList.find(todo => todo.id === id);
        if(selectedList){console.log(selectedList)}

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
                
                {typeof(selectedList) !== 'undefined' &&
                    <ShowTaskLists 
                        taskList={selectedList.tasks}
                        deleteTask={this.deleteTask}
                        editTaskName={this.editTaskName}
                        editTaskCheck={this.editTaskCheck}
                    />
                }

                {!this.state.showAddingTask && 
                <AddButton startAddingTask={this.startAddingTask}>Add new task</AddButton>}
                {this.state.showAddingTask && 
                <InputForm onSubmit={this.addTask}/>}
            </Div>

        )
    }   
}