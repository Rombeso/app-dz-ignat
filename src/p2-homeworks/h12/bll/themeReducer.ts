const SET_THEME = 'SET_THEME'

const initState = {
   theme: 'dark',
};

export type StateThemeType = {
    theme: string
}

export const themeReducer = (state: StateThemeType = initState, action: SetThemeType): StateThemeType => { // fix any
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.pay_load.theme
    }

        default: return state;
    }
};

export type SetThemeType = ReturnType<typeof setThemeAC>
export const setThemeAC = (theme: string)=> {
    return {
        type: SET_THEME,
        pay_load: {theme},
    } as const
}

export const changeThemeC = (): any => {}; // fix any