export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";
export const ADD_TODO = "AD_TODO";


export const addCount = (payload) => (
  {
    type: ADD_COUNT, payload
  }
);

export const subCount = (payload) => (
    {
      type: SUB_COUNT, payload
    }
  );
  
  export const addTodo = (todo) => (
    {
      type: ADD_TODO, payload :todo
    }
  );
  