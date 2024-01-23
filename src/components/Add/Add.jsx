// import Input from "../Input/Input";
// import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
// import { add, startLoading } from "../../redux/reducers/todos.reducer";
import { postRequest } from "../../api/api";
import { addTodoThunk } from "../../api/add-todo.api";

const Add = (props) => {
    const { addTodoInput, setAddTodoInput } = props;

    // dispatch est une fonction
    const dispatch = useDispatch();

    const { todosLoading } = useSelector((store) => {
        return {
            todosLoading: store.todosState.loading,
        };
    });

    const handleAddTodo = async() => {
        if (addTodoInput.trim().length === 0) return;

        const thunk = addTodoThunk(addTodoInput);

        dispatch(thunk);

        // dispatch(startLoading());
        // const response = await postRequest("todos", { title: addTodoInput });

        // const todoFromServer = response.result.todo;

        // const todo_ = {
        //   id: todoFromServer.id,
        //   value: todoFromServer.title,
        //   done: false,
        // };

        // dispatch(add({ TEST_TODO: todo_ }));

        setAddTodoInput("");
    };

    // return (
    //     << >
    //     <Input
    //             id={"add-todo"}
    //             label="Add todo"
    //             value={addTodoInput}
    //             onChange={(e) => setAddTodoInput(e.target.value)}
    //         />

    //     <
    //     Button text = { "Add" } disabled = { todosLoading } onClick = { handleAddTodo } color = { "var(--green-x-light)" }
    //     /> <
    //     />
    // );
};

export default Add;
