import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            if (action.payload === 'up') {
                return copyState.sort((a, b) => a.name < b.name ? -1 : 1)
            }
            if (action.payload === 'down') {
                return copyState.sort((a, b) => a.name > b.name ? -1 : 1)
            }
            return copyState // need to fix
        }
        case 'check': {
            let copyState = [...state]
            return copyState.filter(u => u.age >= 18)
            // return state // need to fix
        }
        default:
            return state
    }
}