
export type InitType =
    { loading: boolean }

const initState = {
loading: false
}

const SET_LOADING = 'SET_LOADING';

export const loadingReducer = (state: InitType = initState, action: LoadingType): { loading: boolean } => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return { ...state, loading: action.pay_load.loading}
        }
        default: return state
    }
}

export type LoadingType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean)=> {
    return {
        type: SET_LOADING,
        pay_load: {loading},
    }as const
}