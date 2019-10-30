const initialState = {
    age: 31,
    history: []
};

const reducer = (state = initialState, action) => {
 let newState = {... state};
 switch (action.type) {
    case 'UP':
        return {
            ...state,
            age: state.age + action.value,
            history: state.history.concat({id: Math.random(), age: state.age + action.value})
        };
        
    case 'DOWN':
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({id: Math.random(), age: state.age - action.value})
            };  
    case 'ITEM_DEL': 
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.id)
            }
 }
 return newState;
}

export default reducer;