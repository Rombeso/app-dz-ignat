import {UserType} from "../HW8";

type ActionType = {type: 'sort', payload: 'down' | 'up'} | {type: 'check', payload: number}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort':
            if (action.payload === 'up') {
            return [...state].sort((a, b)=> a.name > b.name ? 1 : -1 )
            } else {
            return [...state].sort((a, b)=> a.name < b.name ? 1 : -1)
            }
        case 'check': {
            return state.filter(f => f.age >= action.payload)

        }
        default: return state
    }
}