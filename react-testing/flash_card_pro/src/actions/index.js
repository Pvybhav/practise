export const SET_STACK = 'SET_STACK'

export default function setStack(stack) {
    return {
        action: SET_STACK,
        stack: stack
    };
};