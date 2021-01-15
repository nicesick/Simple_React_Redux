import React        from 'react';

import Todos        from './components/Todos'
import AddTodo      from './components/AddTodo'
import { connect }  from 'react-redux';

import { actionAddTodo } from './actions/AddTodoAction'

class App extends React.Component {
    render() {
        const {dispatch, todos} = this.props;

        return (
            <div>
                <AddTodo onClick={text => dispatch(actionAddTodo(text))}/>
                <Todos todos={todos}/>
            </div>
        );
    }
}

function select(state) {
    return {
        todos : state.todos
    };
}

export default connect(select)(App)