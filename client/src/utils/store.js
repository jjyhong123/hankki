import { createStore } from 'redux';

const name = sessionStorage.getItem("name")
const photo = sessionStorage.getItem("photo")

const initialState = {
    modal: false,
    user: { name: name, photo: photo }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'TOGGLE_MODAL':
            return Object.assign({}, state, { modal: !state.modal })
        case 'SET_USER':
            return Object.assign({}, state, { user: action.user })
        case 'SIGN_OUT':
            return Object.assign({}, state, { user: {} })
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store; 