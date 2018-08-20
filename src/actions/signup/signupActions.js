export const SIGNUP_EMAIL_CHANGED = "SIGNUP_EMAIL_CHANGED";
export const SIGNUP_PASSWORD_CHANGED = "SIGNUP_PASSWORD_CHANGED";
export const SIGNUP_PASSWORD_CONFIRM_CHANGED = "SIGNUP_PASSWORD_CONFIRM_CHANGED";
export const SIGNUP_SINGNUP_BUTTON_PRESSED = "SIGNUP_SINGNUP_BUTTON_PRESSED";
export function changeEmail(email){
    return {
        type : SIGNUP_EMAIL_CHANGED,
        email
    }
}
export function changePassword(password){
    return {
        type : SIGNUP_PASSWORD_CHANGED,
        password
    }
}
export function changePasswordConfirm(passwordConfirm){
    return {
        type : SIGNUP_PASSWORD_CONFIRM_CHANGED,
        passwordConfirm
    }
}