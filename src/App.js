import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4'

import { TodoList } from './components/TodoList' //function export
import AddTodo from './components/AddTodo' //default export
import Filters from './components/Filters'
import { connect } from 'react-redux'
import * as actions from './redux/actions'

class App extends Component {
  state = {
    todos: [ ],
    filter: 'All'
  }

  handleChangeFilter = filter =>{
    this.props.onChangeFilter(filter);
  }

  handleDeleteTodo = id => {
    this.props.onDeleteTodo(id);
  }

  handleEditTodo = id => {
    // const {todos} = this.state;
    // const Todo= {}
  }

  handleToggle = id => {
    this.props.onChangeTodoStatus(id);
  }

  handleAddTodo = (e, inputValue) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      text: inputValue,
      complete: false
    };
    this.props.onAddTodo(newTodo);
  }

  render() {
    const { todos, filter } = this.props;
    return (
      <div>
        <form style={{
           margin: '30px'
        }} onSubmit={this.handleDeleteTodo}>
        <Fragment>
          <AddTodo onAddTodo={this.handleAddTodo} />
        </Fragment>
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
            <Fragment>
              <h3 style={{ marginLeft: '40px' }}>Add Todos</h3>
            </Fragment>
        }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  todos: state.todos,
  filter: state.filter
})

const mapDispatchToProps = dispatch=>({
  onAddTodo: (newTodo) => dispatch(actions.addTodo(newTodo)),
  onDeleteTodo: (todoId) => dispatch(actions.deleteTodo(todoId)),
  onChangeTodoStatus: (todoId) => dispatch(actions.changeTodoStatus(todoId)),
  onChangeFilter: (filter) => dispatch(actions.changeFilter(filter)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
