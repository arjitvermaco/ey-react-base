import { useForm } from "react-hook-form";

export default function FormHook() {
  const { register,handleSubmit,watch,formState: { errors },} = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("username")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="test" {...register("example")} /> */}
      <input {...register("username",{required:true})} />
      {errors.username && <span>username is required!!</span>}
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
