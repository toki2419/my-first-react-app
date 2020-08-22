import React from "react"
class TodoItem extends React.Component{
    
    render(){
        const {id, title, completed} = this.props.todo;
        return(
            <li className="todo-item">
                <input className="item-check" 
                    type="Checkbox" checked={completed}
                    onChange={()=> this.props.updateTodo(id, completed)}
                />
                <span className={completed ? "completed" : "not-completed"}>
                    {title}
                </span>
                <button className="btn-delete"
                    onClick={()=> this.props.deleteTodo(id)}>X</button>
            </li>
        );
    }
}
export default TodoItem;