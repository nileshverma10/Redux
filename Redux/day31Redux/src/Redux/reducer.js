// import Todos from "../component/Todos"
import { ADD_COUNT } from "./action"
import { SUB_COUNT } from "./action"
import { ADD_TODO } from "./action"

export const reducer = (store, {type,payload}) =>{
    console.log("store",store)
    switch(type){
        case ADD_COUNT:
        return {...store, count: store.count + payload }
        case SUB_COUNT:
            return {...store, count: store.count - payload }
            case ADD_TODO:
                return{...store, todo: [...store.todo, payload]}
        default:
         return store;
    }
}