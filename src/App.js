import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./store/CounterSlice";
import Cakes from "./Cakes";
import Memo from "./Memo";
import UserComponent from "./UserComponent";
import AddUser from "./AddUser";

function App() {

  return (


    <>
     {/* <UserComponent/> */}
     <AddUser/>
    {/* <Memo/> */}
      {/* <h1>Counter : {count}</h1>

      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>

        <h1 className="text-xl font-bold mt-12">Cake Store</h1>
        <Cakes/> */}
    </>
  );
}

export default App;
