import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onEditTodo: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  }

  handleEdit = () => {
    const {id, onEditTodo} = this.props;
    onEditTodo(id);
  }

  handleDelete = () => {
    const {id, onDeleteTodo} = this.props;
    onDeleteTodo(id);
  }

  handleToggle = () => {
    const {onToggle, id} = this.props;
    onToggle(id);
  }

  render() {
    const {text, onDeleteTodo, onEditTodo, id, complete} = this.props;
    return (<li style={{
        flexDirection: 'row',
        width: '450px'
      }}>
      <input style={{ margin: '5px'  }} type='checkbox' onChange={this.handleToggle} checked={ complete ? 'checked' : ''}/>
      <label style={{ margin: '5px', fontFamily: 'verdana', fontWeight: '600' }} >{text}</label>
      <div style={{marginLeft: '5px', float:'right'}}>
        <button style={{ marginRight: '5px', width: '60px', cursor: 'pointer'}}  onClick={this.handleEdit}>Edit</button>
        <button style={{ width: '60px', cursor: 'pointer'}}  onClick={this.handleDelete}>Delete</button>
      </div>
    </li>)
  }
}

export const TodoList = ({list, onDeleteTodo, onEditTodo, onToggle, filter}) => { 
  let todosToRender = list.filter( todo => {
    switch (filter) {
      case 'Completed':
        return todo.complete;
        break;
      case 'Uncompleted':
        return !todo.complete;
        break;
      case 'All':
      default:
        return true;
    }
  })

  return(
    <ul style={{
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column'
  }}>
      {
        todosToRender.map(todosToRender => 
          <Todo key={todosToRender.id} {...todosToRender} 
            onEditTodo={onEditTodo} 
            onDeleteTodo={onDeleteTodo} 
            onToggle={onToggle}/>)
      }
    </ul>
  );
}
// uso el export en la misma funcion cuando tengo muchos en el mismo file, del 
// otro lado desestructuro (usando { nombre }) para levantar solo esa
//export default TodoList;

TodoList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string.isRequired
}