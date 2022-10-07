
export const langSlice = (state = localStorage.getItem('lang'), action) => {
    switch (action.type) {

        case 'ChangeLang':
            localStorage.setItem('lang', action.payload)
            return action.payload
        default: return state
    }
}
export const getLang = (code) => {
    return {
        type: 'ChangeLang',
        payload: code

    }
}

export const getStateLang = (state => {
    return state.currentLang
})