export const ADD_TODO = 'ADD_TODO'

export function actionAddTodo(text) {
    return {
        type : ADD_TODO,
        text
    }
}