interface State {
    id:string,
    otherPlayersIds:string[],
    vesselLife:number
}

const initialState : State = {
    id:'',
    otherPlayersIds: [],
    vesselLife: 100
}

const gameReducer = (state = initialState, action:any):State => {
    switch (action.type) {
        case 'SET_ID':
            return { ...state, id: action.payload}
        case 'NEW_PLAYER':
            return { ...state, otherPlayersIds: state.otherPlayersIds.concat([action.payload]) }
        default:
            return state
    }
}

export const setId = (id:string) => ({
    type: 'SET_ID',
    payload: id
});

export const addDistantPlayer = () => ({
    type: 'NEW_PLAYER',
    payload: ""
})

export default gameReducer;