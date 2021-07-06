import React, { Component } from 'react'
import MasterList from './Pages/MasterList';
import Main from './Pages/Main';
import './App.css';
export default class App extends Component {
  constructor(){
    super();
    this.state = {
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
    return (
      <>
        <MasterList 
          lists={this.state.masterLists}
          addNewList={this.addNewList}
          editCurrentList={this.editCurrentList}
          newList={this.state.showNewListButton}
          startAddingList={this.startAddingList}
        />

        <Main 
            id={this.state.currentListId}
            title={this.state.currentListTitle}
          />
      </>
    )
  }
}
