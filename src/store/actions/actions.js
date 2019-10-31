export const ageUpAsync = val => {
    return {type: 'UP', value: val}
}

export const loading = () => {
    return {type: 'LOADING'}
}

export const ageUp = val => {
    
    return dispatch => {
        dispatch(loading());
        setTimeout(() => {
            dispatch(ageUpAsync(val))
        }, 2000);
    }
}

export const ageDown = val => {
    return {type: 'DOWN', value: val}
}


