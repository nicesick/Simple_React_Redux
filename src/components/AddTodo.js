import React from 'react'

class AddTodo extends React.Component {
    addTodoEvent(e) {
        const text = document.getElementById('add-todo-input').value;
        this.props.onClick(text);
    }

    render() {
        return (
            <div>
                <input id="add-todo-input" type="text" />
                <button type="submit" onClick={(e) => this.addTodoEvent(e)}>Add</button>
            </div>
        )
    }
}

export default AddTodo