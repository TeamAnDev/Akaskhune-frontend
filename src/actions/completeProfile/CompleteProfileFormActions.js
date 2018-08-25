export const CP_USER_NAME_CHANGED = "CP_USER_NAME_CHANGED";
export const CP_NAME_AND_FAMILY_CHANGED = "CP_NAME_AND_FAMILY_CHANGED";
export const CP_BIO_CHANGED = "CP_BIO_CHANGED";
export function changeUsername(username){
    return {
        type : CP_USER_NAME_CHANGED,
        username
    }
}
export function chnageNameAndFamily(nameAndFamily){
    return {
        type : CP_NAME_AND_FAMILY_CHANGED,
        nameAndFamily
    }
}
export function changeBio(bio){
    return {
        type : CP_BIO_CHANGED,
        bio
    }
}