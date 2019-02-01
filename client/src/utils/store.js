import { createStore } from 'redux';

const initialState = {
    inputText: 'hi'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT_TEXT':
            return Object.assign({}, state, { inputText: action.text })
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store; 