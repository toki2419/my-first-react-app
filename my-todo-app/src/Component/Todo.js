import React from 'react';
import TodoItem from './TodoItem'
class Todos extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            updateTodo={this.props.updateTodo}
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
export default Todos;