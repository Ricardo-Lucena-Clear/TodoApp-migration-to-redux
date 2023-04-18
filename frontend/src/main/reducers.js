import { combineReducers } from "redux";    

const rootReducer = combineReducers({
    todo: () => ({
        description: "ler livro",
        list:[{
            _id: 1,
            description:"pagar fatura",
            done: true
        },{
    _id: 2,
description: "reuniao com a equipé as 10",
done:false
    },{
        id:3,
        description:"consulta medica",
        done:false
    }]
    })
})

export default rootReducer