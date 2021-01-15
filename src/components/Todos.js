import Todo from './Todo'

function Todos(props) {
    let todos = props.todos.map(todo => {
        return <Todo key={todo} text={todo} />
    });

    return (
        <ol>
            {todos}
        </ol>
    );
}

export default Todos