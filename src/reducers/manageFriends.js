export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
                return {...state,friends: [...state.friends, action.friend]}
            break;
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex(f => f.id === action.id)
            let newArr = [...state.friends.slice(0, index), ...state.friends.slice(index + 1)]
            return {...state,friends: newArr}
            break;
    
        default:
            return state;
    }
}
