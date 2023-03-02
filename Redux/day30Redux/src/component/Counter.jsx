import { store } from "../Redux/store";

export const Counter = () => {
  console.log(store.getState());
  return (
    <div>
      <h1>Counter:{store.getState().count}</h1>
      <button
        onClick={() => {
          store.dispatch({ type: "ADD_COUNT", payload: 1 });
        }}
      >
        ADD 1
      </button>
    </div>
  );
};
