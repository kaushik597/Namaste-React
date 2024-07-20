1. use context vs redux?
Ans: Use context and redux both are used to manage the state(Store your state in a global object and access them from anywhere of your application). 
If your application is small and has less state management it is better to use useContext().
If your application is complex and large it is better to use Redux

2. Advantages of using redux toolkit over redux?
Ans: 
1. less  boiler plate
2. not using of lot of libraries
3. easier async operations
4. simple store setup
5. Built in devtools

3. Explain dispatcher?
Ans: Dispatcher is used to refer a function called dispatch. Dispatch function is a core concept of redux store. it is used to dispatch an action to the reducer. 

4. Explain reducer?
Ans: Reducer is a function used to modify the store based on the action it has received.It is created inside a slice using createSlice.

5. Explain Slice?
Ans: Slice is a collection of actions and reducers. If you have user related data and in order to do modifications to user related data in the store we create a user Slice. It is a logical partition for your data in the store.

6. Explain selector?
Ans: Selector is subscribed to the store. whatever changes are made in the store that can be automatically reflected on the ui because of selector.

7. Explain createslice and the configuration it takes?
Ans: createSlice is a utility function provided by redux toolkit. It is used to create a specific type of slice you need. eg user slice for managing user related data, cartSlice for managing cart related data. It contains actions and reducers

configuration: It takes name, initial state and reducers

const userSlice= createSlice({
    name:"user",
    state:{items:[]},
    reducers:{
        addItem:(state,action)=>{
            your logic
        }
    }

})

export const {addItem,...} = userSlice.actions;
export default userSlice.reducer;