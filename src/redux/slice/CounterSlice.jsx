import { createSlice } from "@reduxjs/toolkit"


export const CounterSlice = createSlice(
    {
        name: "counter",
        initialState: [],
        reducers: {
            add: function (state, action) {
                state.push(action.payload);
                console.log('add');
                console.log(state.length);
                return state;
            },
            remove: function(state,action){
               return state.filter((item)=> item.id!== action.payload)
            }
    }}
);

export const { add, remove } = CounterSlice.actions;
export default CounterSlice.reducer;

//if there was an object then you know
//you can do state.counter.value
// const initialState = {
//     value: 0
// }