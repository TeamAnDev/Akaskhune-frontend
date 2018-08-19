export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN = 'LOGIN';
export const LOGIN_GOOGLE = 'LOGIN_GOOGLE'
export const SIGNUP = 'SIGNUP'
export function changeEmail(email){
    return {
        type : EMAIL_CHANGED,
        email
    }
}
export function changePassword(password){
    return {
        type : PASSWORD_CHANGED,
        password
    }
}
export function login(){
    return {
        type : LOGIN
    }
}

export function loginGoogle() {
    return {
        type : LOGIN_GOOGLE
    }
}

export function signup() {
    return {
        type : SIGNUP
    }
}
