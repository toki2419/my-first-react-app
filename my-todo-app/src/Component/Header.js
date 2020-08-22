import React from 'react'

class Header extends React.Component{
    render() {
        let total = this.props.todos.length;
        let uncompleted = this.props.todos.filter(todo => {
            return todo.completed === 0;
        }).length;        
        return(
            <div className="header-container">
                <h1>WELLCOME TODO APP</h1>
                <h4>Total task: {total}</h4>
                <h3>Uncompleted task: {uncompleted}</h3>
            </div>
        )
    }
};
export default Header