import React, { Component } from 'react'
import styled from 'styled-components';
// import ShowList from '../../views/showlist';
// import ListForm from '../../views/listform';
// import AddItem from '../AddItem';
const Div = styled.div`
        background-color: var(--primary-background);
        width: 25%;
        float: left;
        min-height: 100vh;
        color:var(--text);
    `;
export default class MasterList extends Component {
    render() {
        const { newList, startAddingList, lists, addNewList, editCurrentList } = this.props;
        return (
            <Div>
                <div className='header'>Lists</div>
                {/* <ShowList lists={lists} editCurrentList={editCurrentList}/>
                
                {!newList && 
                <AddItem startAddingTask={startAddingList}>Add new list</AddItem>}
                {newList && 
                <ListForm onSubmit={addNewList}/>} */}
            </Div>
        )
    }
}