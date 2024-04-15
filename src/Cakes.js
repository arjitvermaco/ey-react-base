import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChocoCake, addPineappleCake, addVanillaCake, buyChocoCake, buyPineappleCake, buyVanillaCake } from "./store/CakesSlice";

export default function Cakes() {
  const cakes = useSelector((state) => state.cake);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Vanilla Cakes in Store : {cakes.vanillaCake}</h2>

      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
            dispatch(buyVanillaCake())
        }}
      >
        Buy Vanilla Cake
      </button>



      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
            dispatch(addVanillaCake(20))
        }}
      >
        Add Vanilla Cake
      </button>

      <h2>Choco Cakes in Store : {cakes.chocoCake}</h2>

      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
            dispatch(buyChocoCake())
        }}
      >
        Buy Choco Cake
      </button>


      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
            dispatch(addChocoCake(20))
        }}
      >
        Add Choco Cake
      </button>
      <h2>Pineapple Cakes in Store : {cakes.pineappleCake}</h2>

      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
            dispatch(buyPineappleCake())
        }}
      >
        Buy Pineapple Cake
      </button>


      <button
        className="bg-blue-500 ml-5 rounded-md text-white p-2"
        onClick={() => {
            dispatch(addPineappleCake(15))
        }}
      >
        Add Pineapple Cake
      </button>
    </div>
  );
}
