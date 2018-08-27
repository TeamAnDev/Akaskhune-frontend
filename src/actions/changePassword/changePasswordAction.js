export const OLD_PASSWORD_CHANGED = "OLD_PASSWORD_CHANGED";
export const NEW_PASSWORD_CHANGED = "NEW_PASSWORD_CHANGED";
export const CONFIRM_PASSWORD_CHANGED = "CONFIRM_PASSWORD_CHANGED";

export function changeOldPassword(oldPassword) {
    return {
        type : OLD_PASSWORD_CHANGED,
        oldPassword
    }
}

export function changeNewPassword(newPassword) {
    return {
        type : NEW_PASSWORD_CHANGED,
        newPassword
    }
}

export function changeConfirmPassword(confirmPassword) {
    return {
        type : CONFIRM_PASSWORD_CHANGED,
        confirmPassword
    }
} 
