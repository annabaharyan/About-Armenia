import { regionsLangs } from './myMap'
export const myMapSlice = (state = [], action) => {
    switch (action.type) {
        case 'filterLang':
            state = regionsLangs
            const filteredMap = state.filter(res => res.lang === action.payload)
            return filteredMap

        default: return state
    }
}
export const myMap = (state) => {

    return state.myMap
}
export const filterMapLang = (langs) => {
    return {
        type: 'filterLang',
        payload: langs
    }
}