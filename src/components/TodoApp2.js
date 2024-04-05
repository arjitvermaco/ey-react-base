import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TodoItem from "./TodoItem";
export default function TodoApp2() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [todos,setTodos] = useState([])

  function handleAddTodo(data){
    console.log(data)
    //Modify the data object
    data.status = false;

    setTodos([...todos,data])
    reset()
  }

  function changeTodoStatus(todo){
    const newTodos = todos.map((item)=>{
        if(todo.item === item.item){
            return { ...item, status: !item.status };
        }
        return item
    })

    setTodos(newTodos)
  }

  return <div>
     <form className="flex flex-col" onSubmit={handleSubmit(handleAddTodo)}>
        <input
          placeholder="Add A New Todo"
          className=" mt-12 border-2 rounded-md p-2 w-[80%] block mx-auto"
          {...register("item", { required: true })}
        />
        {errors.item && <span>TodoItem is required!!</span>}

        <input
          className="bg-teal-500 p-2 rounded-md mt-4 text-center mx-auto w-[150px]"
          type="submit"
          value="Add Todo"
        />
      </form>
      
      {todos.map((item)=>{
        return (
            <TodoItem todo={item} changeTodoStatus={changeTodoStatus}/>
        )
      })}

  </div>;
}
