import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4'

import { TodoList } from './components/TodoList' //function export
import AddTodo from './components/AddTodo' //default export
import Filters from './components/Filters'

class App extends Component {
  state = {
    todos: [ ],
    filter: 'All'
  }

  handleChangeFilter = filter =>{
    this.setState({filter});
  }

  handleDeleteTodo = id => {
    const {todos} = this.state;
    const newTodoList = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodoList
    });
  }

  handleEditTodo = id => {
    const {todos} = this.state;
    const Todo= {}
  }

  handleToggle = id => {
    const {todos} = this.state;
    const newTodoList = todos.map(todo => {
      if (todo.id === id){
        //return Object.assign({}, todo, {complete = !todo.complete}) //metodo viejo
        return {...todo, complete: !todo.complete };
      }
      return todo
    })

    this.setState({
      todos: newTodoList
    })
  }

  handleAddTodo = (e, inputValue) => {
    e.preventDefault();
    const {todos} = this.state;
    const newTodo = {
      id: uuid(),
      text: inputValue,
      complete: false
    };

    this.setState({
      //todos: todos.concat(newTodo) //metodo viejo
      todos: [...todos, newTodo]     //ES6 spread method
    })
  }

  render() {
    const { todos, filter } = this.state;
    return (
      <div>
        <form onSubmit={this.handleDeleteTodo}>
        <AddTodo onAddTodo={this.handleAddTodo} />
        {
          todos.length ?
            <Fragment>
              <Filters filter={filter} onChangeFilter={this.handleChangeFilter}/>
              <TodoList list={todos}
                filter={filter} 
                onEditTodo={this.handleEditTodo} 
                onDeleteTodo={this.handleDeleteTodo}
                onToggle={this.handleToggle}/>
            </Fragment>
              :
            <h3>Add Todos</h3>
        }
        </form>
      </div>
    );
  }
}

export default App;
