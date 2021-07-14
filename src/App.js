import React, { Component } from 'react'
import MasterList from './Pages/MasterList';
import Main from './Pages/Main';
import Login from './Components/Templates/LoginPage/LoginPage';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user_login: false,
      masterLists: [],
      currentListId: '',
      currentListTitle: '',
      showNewListButton: false
    };
    this.addNewList = this.addNewList.bind(this);
    this.editCurrentList = this.editCurrentList.bind(this);
  }

  addNewList(list){
      this.setState({
        masterLists: [...this.state.masterLists, list],
        showNewListButton: false,
      });
  };

  // deleteList(list){
  // }
  
  editCurrentList(id){
    this.setState({
      currentListId: id
    });

    const currentList = this.state.masterLists.filter(list => {
      return list.id === id
    })

    if (currentList) {
      var listTitle = currentList.map(list => { return list.name })
      this.setState({
        currentListTitle: listTitle
      });
    }
  };

  startAddingList = () => {
    this.setState({
      showNewListButton: true
    })
  }

  render() {
    const {user_login, masterLists, currentListId, currentListTitle,showNewListButton} = this.state;
    return (
      <div>
        <MasterList 
          lists={masterLists}
          addNewList={this.addNewList}
          editCurrentList={this.editCurrentList}
          newList={showNewListButton}
          startAddingList={this.startAddingList}
        />

        <div className='Login-button'>
          {user_login ? 
            <div>Default user</div>: 
            <Login />
          }
        </div>

        <Main 
            id={currentListId}
            title={currentListTitle}
        />
      </div>
    )
  }
}
