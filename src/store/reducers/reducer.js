const initialState = {
    age: 31,
    history: [],
    loading: false
};

const reducer = (state = initialState, action) => {
//console.log(0);
 switch (action.type) {
    case 'UP':
        return {
            ...state,
            age: state.age + action.value,
            history: state.history.concat({id: Math.random(), age: state.age + action.value}),
            loading: false
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
        };
    case 'LOADING':
        return {
            ...state,
            loading: true
        }
    default:
        return {
            ...state
        }

 }
}

export default reducer;