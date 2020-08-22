import React from 'react';
import axios from 'axios';

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

    render(){
        return(
            <div className="container">
                <h1> AAAAAAAAA </h1>
            </div>
        );
    };
}
export default TodoApp