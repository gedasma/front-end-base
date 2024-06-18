// import { useContext, useReducer } from "react";
// import React from "react";
// import ProductReducer from "../reducers/ProductReducer";

// const AppContext = React.createContext();

// const initialState = {
//     tasks: [
//         {
//             id:1,
//             title:"Test task1",
//             description: "Test task1 description"
//         },
//         {
//             id:2,
//             title:"Test task2",
//             description: "Test task2 description"
//         },
//         {
//             id:3,
//             title:"Test task3",
//             description: "Test task3 description"
//         }
//     ],
//     // authToken:'',
//     isOpen:false
// }

// export const AppProvider = ({children})=>{
//     const [state, dispatch] = useReducer(ProductReducer, initialState) //!!!!!
    
//     const setAuthToken = (token)=>{
//         dispatch({type: 'Set token', payload: token})
//     }
    

//     return(
//         <AppContext.Provider value={{
//             ...state,
//             setAuthToken
//         }}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useGlobalContext = () =>{
//     return useContext(AppContext)
// }



//----------------------


import { createContext, useReducer } from "react";
import reducer, { initialState } from "../reducers/ProductReducer";

export const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const setAuthToken = (token) =>{
        dispatch({
            type: "changeToken",
            payload: token
        })
    }

    const removeAuthToken = () =>{
        dispatch({
            type: 'removeToken',
            payload: ''
        })
    }

    const value = {
        authToken: state.authToken,
        setAuthToken: setAuthToken,
        removeAuthToken: removeAuthToken
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}