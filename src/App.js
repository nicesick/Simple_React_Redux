import React        from 'react';
import { connect }  from 'react-redux';

import Todos        from './components/Todos'
import AddTodo      from './components/AddTodo'
import RouterTest   from './components/RouterTest';

import { actionAddTodo } from './actions/AddTodoAction'

class App extends React.Component {
    render() {
        const {dispatch, todos, location } = this.props;

        return (
            <div>
                <AddTodo    onClick={text => dispatch(actionAddTodo(text))}/>
                <Todos      todos={todos}/>
                <RouterTest location={location} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        location    : ownProps.match.params.filter,
        todos       : state.todos
    };
}

export default connect(mapStateToProps)(App)