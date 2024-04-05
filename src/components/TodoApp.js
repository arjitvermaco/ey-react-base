import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [allTodos, setAllTodos] = useState([]);

  function handleAddTodo(data) {
    console.log(data);

    data.status = false;

    setAllTodos([...allTodos, data]);
    reset();
  }

  function changeTodoStatus(todo) {
    console.log("changing todo");
    const newTodos = allTodos.map((item) => {
      if (todo.todoItem === item.todoItem) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    console.log(newTodos);
    setAllTodos(newTodos);
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-xl">
      <h1 className="text-3xl font-bold text-center pt-12">My Todo App</h1>

      <form className="flex flex-col" onSubmit={handleSubmit(handleAddTodo)}>
        <input
          placeholder="Add A New Todo"
          className=" mt-12 border-2 rounded-md p-2 w-[80%] block mx-auto"
          {...register("todoItem", { required: true })}
        />
        {errors.username && <span>TodoItem is required!!</span>}

        <input
          className="bg-teal-500 p-2 rounded-md mt-4 text-center mx-auto w-[150px]"
          type="submit"
          value="Add Todo"
        />
      </form>
      {allTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.todoItem}
            todo={todo}
            changeTodoStatus={changeTodoStatus}
          />
        );
      })}
    </div>
  );
}
