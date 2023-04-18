const INITIAL_STATE = {
    description: "ler livro",
    list: [{
        _id: 1,
        description: "pagar fatura",
        done: true
    }, {
        _id: 2,
        description: "reuniao com a equipé as 10",
        done: false
    }, {
        id: 3,
        description: "consulta medica",
        done: false
    }]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'DESCRIPTION_CHANGED':
            return {... state, description: action.payload}
            case "TODO_SEARCHED":
                return {...state,list: action.payload.data}
            default:
                return state
    }
}