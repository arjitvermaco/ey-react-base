import { useForm } from "react-hook-form";

export default function RegisterUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleFormData(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormData)} className="max-w-md mx-auto bg-white pt-[13px] shadow-lg rounded-md">
      <label className="text-xl font-bold text-blue-500">FirstName</label>
      <input className=" border-2 border-red-500 ml-10 " {...register("firstName", { required: true, minLength: 2 })} />
      <br />
      {errors.firstName && <span>FirstName is required!</span>}
      <br />

      <label>LastName</label>

      <input {...register("lastName", { required: true })} />
      <br />
      {errors.lastName && <span>LastName is required!</span>}
      <br />

      <label>Email</label>

      <input
        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
      />
      <br />
      {errors.email && <span>Enter a valid email</span>}
      <br />

      <label>Phone No</label>

      <input
        {...register("phoneNo", { required: true, pattern: /^[6-9]{1}[0-9]{9}$/ })}
      />
      <br />
      {errors.phoneNo && <span>Enter a valid phone no</span>}
      <br />

      <label>City</label>
      <input
        {...register("city", { required: true})}
      />
      <br />
      {errors.city && <span>City Is required</span>}
      <br />

      <label>Message</label>
      <textarea
        {...register("message", { required: true})}
      />
      <br />
      {errors.message && <span>message Is required</span>}
      <br />

      <input type="submit" />
    </form>
  );
}
