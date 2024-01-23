// import { add, startLoading } from "../redux/reducers/todos.reducer";
// import { postRequest } from "./api";

// signature d'une fonction middleware specifique
// le middleware thunk
// const thunkFunction = (dispatch, getState) => {
//     // logic here that can dispatch actions or read state
// };

// export const addTodoThunk = (title) => async(dispatch, getState) => {
//     const todosState = getState().todosState;
//     if (todosState.loading) return;

//     dispatch(startLoading());
//     const response = await postRequest("todos", { title: title });

//     const todoFromServer = response.result.todo;

//     const todo_ = {
//         id: todoFromServer.id,
//         value: todoFromServer.title,
//         done: false,
//     };

//     dispatch(add({ TEST_TODO: todo_ }));
// };

// export const addTodoThunk_ = (title) => {
//     const thunk = async(dispatch, getState) => {
//         const todosState = getState().todosState;

//         dispatch(startLoading());
//         const response = await postRequest("todos", { title: title });

//         const todoFromServer = response.result.todo;

//         const todo_ = {
//             id: todoFromServer.id,
//             value: todoFromServer.title,
//             done: false,
//         };

//         dispatch(add({ TEST_TODO: todo_ }));
//     };

//     return thunk;
// };
