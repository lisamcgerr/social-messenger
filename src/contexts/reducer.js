export const initialState = {
    user: null
};

export const actionTypes = {
    SET_USER: 'SET_USER'
};

const reducer = (state, action) => {
    console.log('action: ', action);
    switch (action.type) {

        default:
            return state;
    }
};

export default reducer;