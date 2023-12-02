const initState = {
    themeId: 1,
}


export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): СhangeThemeIdType => ({type: 'SET_THEME_ID', id} as const) // fix any

export type ThemeStateType = typeof initState

export type СhangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export type ActionsType = СhangeThemeIdType
