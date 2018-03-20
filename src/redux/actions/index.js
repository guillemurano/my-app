export function addTodo(newTodo){
    return {
      type: 'ADD_TODO',
      newTodo
    }
  }
  
export function deleteTodo(todoId){
    return {
        type: 'DELETE_TODO',
        todoId
    }
}

export function changeTodoStatus(todoId){
    return {
        type: 'CHANGE_TODO_STATUS',
        todoId
    }
}

export function changeFilter(filter) {
    return {
        type: 'CHANGE_FILTER',
        filter
    }
}
