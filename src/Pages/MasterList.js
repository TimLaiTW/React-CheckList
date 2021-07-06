import React, { Component } from 'react'
import styled from 'styled-components';
import ShowMasterLists from '../Components/Templates/ShowMasterLists';
import AddButton from '../Components/Actions/AddButton';
import InputForm from '../Components/Templates/InputForm';
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
                <ShowMasterLists lists={lists} editCurrentList={editCurrentList}/>
                 
                {!newList && 
                <AddButton startAddingTask={startAddingList}>Add new list</AddButton>}
                {newList && 
                <InputForm onSubmit={addNewList}/>}
            </Div>
        )
    }
}