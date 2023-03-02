import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/action";
const Coounter = () => {
  const dispatch = useDispatch();

  const count = useSelector((store) => store.count);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <br />
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
    </div>
  );
};

export default Coounter;
