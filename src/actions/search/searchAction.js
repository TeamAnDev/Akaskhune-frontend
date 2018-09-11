export const CHANGE_KEYWORD = "CHANGE_KEYWORD";

export function changeKeyword(keyword) {
    return({
        type : CHANGE_KEYWORD,
        keyword
    })
}