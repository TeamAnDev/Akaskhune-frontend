export const LOGIN_EMAIL_CHANGED = 'EMAIL_CHANGED';
export const LOGIN_PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_GOOGLE = 'LOGIN_GOOGLE';
export const SIGNUP_PAGE = 'SIGNUP_PAGE';
export function changeEmail(email){
    return {
        type : LOGIN_EMAIL_CHANGED,
        email
    }
}
export function changePassword(password){
    return {
        type : LOGIN_PASSWORD_CHANGED,
        password
    }
}

export function loginGoogle() {
    return {
        type : LOGIN_GOOGLE
    }
}

export function signupPage() {
    return {
        type : SIGNUP_PAGE
    }
}
