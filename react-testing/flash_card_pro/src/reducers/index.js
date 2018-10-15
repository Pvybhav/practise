import { SET_STACK } from '../actions';

export default function stack(state = {}, action) {
    switch (action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}