import { registerInitial } from "@/interface"

export const initialValues: registerInitial =  {

    usernameMessage: 'Required',
    passwordMessage: 'Required',
    checkPasswordMessage: 'Required'

}

export enum ActionKinds {
    SET_USERNAME_MESSAGE = 'SET_USERNAME_MESSAGE',
    SET_PASSWORD_MESSAGE = 'SET_PASSWORD_MESSAGE',
    SET_CHECK_PASSWORD_MESSAGE = 'SET_CHECK_PASSWORD_MESSAGE'  
}

interface Action {
    type: ActionKinds,
    payload: any
}

export const reducer = (state: any = initialValues, action: Action) => {
    switch(action.type) {
        case "SET_PASSWORD_MESSAGE": 
            return {...state, passwordMessage: action.payload}
            break;
        case "SET_USERNAME_MESSAGE":
            return {...state, usernameMessage: action.payload}
            break;
        case "SET_CHECK_PASSWORD_MESSAGE": 
            return {...state, checkPasswordMessage: action.payload}
            break;
        
        default:
            return state;
    }
}




