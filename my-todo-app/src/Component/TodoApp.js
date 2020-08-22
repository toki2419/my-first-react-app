import React from 'react';
import axios from 'axios';
import Todo from './Todo'

class TodoApp extends React.Component{
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('/api/select').then(re => {
            //console.log(re.data);
            this.setState({todos: re.data.todos});
        })
        .catch(error => console.log(error));
    }

    deleteTodo = id => {
        const todoId = {
            id: id
        };
        axios.post('/api/delete', todoId)
            .then(res => {
                this.setState(prevState => ({
                    todos: prevState.todos.filter(el => el.id !== id )
                }));
            })
        .catch(error => console.log(error));
    };

    render(){
        return(
            <div className="container">
                <Todo todos = {this.state.todos} 
                    deleteTodo={this.deleteTodo}
                />
                
            </div>
        );
    };
}
export default TodoApp