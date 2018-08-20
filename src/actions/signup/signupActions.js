export const SIGNUP_EMAIL_CHANGED = "SIGNUP_EMAIL_CHANGED";
export const SIGNUP_PASSWORD_CHANGED = "SIGNUP_PASSWORD_CHANGED";
export const SIGNUP_PASSWORD_CONFIRM_CHANGED = "SIGNUP_PASSWORD_CONFIRM_CHANGED";
export const SIGNUP_SINGNUP_BUTTON_PRESSED = "SIGNUP_SINGNUP_BUTTON_PRESSED";
export function emailChanged(email){
    return {
        type : SIGNUP_EMAIL_CHANGED,
        email
    }
}
export function passwordChanged(password){
    return {
        type : SIGNUP_PASSWORD_CHANGED,
        password
    }
}
export function passwordConfirmChanged(passwordConfirm){
    return {
        type : SIGNUP_PASSWORD_CONFIRM_CHANGED,
        passwordConfirm
    }
}