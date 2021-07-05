import React, { Component } from 'react'
// import TodoList from './views/todolist';
// import SideBar from './components/Templates/SideBar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
        masterLists: [list, ...this.state.masterLists],
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
      var listTitle = currentList.map(list => { return list.title })
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
