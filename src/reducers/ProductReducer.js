// import { act } from "react-dom/test-utils"

// const ProductReducer = (state, action) =>{
//     switch(action.type){
//         case 'Set token':
//             console.log("setting new state: " + action.payload)
//             return{
//                 ...state, authToken: action.payload
//             }
//         default:
//             return state
//     }
// }

// export default ProductReducer

//-------------------


export const initialState = {
    authToken: ''
}

const appReducer = (state, action) =>{
    switch (action.type){
        case "changeToken":
            return {
                ...state,
                authToken: action.payload
            }
        case 'removeToken':
            return {
                ...state,
                authToken: ''
            }
        default:
            return state
    }
}

export default appReducer