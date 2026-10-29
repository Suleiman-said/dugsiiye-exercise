export const initialState = {
    counterA: 0,
    counterB: 0 // 1. Lowercase 'c'
}
export function doubleCounterReducer(state, action){
    switch(action.type){
        case 'INCREAMENT_A':
            return{ ...state, counterA: state.counterA + 1}
        case 'DECREAMENT_A':
            return{ ...state, counterA: state.counterA > 0 ? state.counterA - 1 : 0 }
        case 'INCREAMENT_B':
            return{
                ...state,
                counterB: state.counterB + 1 // 2. Lowercase 'c'
            }
        case 'DECREAMENT_B':
            return{
                ...state,
                counterB: state.counterB > 0 ? state.counterB - 1 : 0 // 3. Lowercase 'c'
            }
        case 'RESET_ALL':
            return initialState;
        default:
            return state
    }
}
