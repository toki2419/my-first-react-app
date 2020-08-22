import React from 'react';
import axios from 'axios';
import Todo from './Todo';
import AddTodo from './AddTodo';
import Header from './Header';

class TodoApp extends React.Component{
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('/api/select').then(re => {
            console.log(re.data);
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

    updateTodo = (id, completed) => {
        const todoUpdate = {
            id: id,
            completed: completed ? 0 : 1
        };
        axios.post('/api/update', todoUpdate).then(res => {
            this.setState({
                ...this.state.todos.map( todo => {
                    if(todo.id===id){
                        todo.completed = todo.completed ? 0 : 1;
                    }
                    return todo;
                })
            });
        }).catch(error => console.log(error));
    };

    addTodo = title => {
        const todoData = {
            title: title,
            completed: 0
        };
        axios.post('/api/insert', todoData).then(res => {
            let todos = this.state.todos;
            todos = [todoData, ...todos]
            this.setState({todos:todos});
        }).catch(err => console.log(err));
    };

    render(){
        return(
            <div className="container">
                <Header todos = {this.state.todos}/>
                <AddTodo addTodo = {this.addTodo}/>
                <Todo todos = {this.state.todos} 
                    deleteTodo = {this.deleteTodo}
                    updateTodo = {this.updateTodo}
                />                
            </div>
        );
    };
}
export default TodoApp