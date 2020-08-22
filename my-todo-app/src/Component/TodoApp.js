import React from 'react';
import axios from 'axios';

class TodoApp extends React.Component{
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('/api/select')
            .then(re => this.setState({todos: re.data.message}))
    }

    render(){
        return(
            <div className="container">
                <h1>{ this.state.todos }</h1>
            </div>
        );
    };
}
export default TodoApp