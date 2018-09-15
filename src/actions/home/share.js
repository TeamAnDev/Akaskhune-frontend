export const VISIBLE_SHARE = "VISIBLE_SHARE";
export const INVISIBLE_SHARE = "INVISIBLE_SHARE";

export function visibleShare() {
    return({
        type : VISIBLE_SHARE
    })
}

export function invisibleShare() {
    return({
        type : INVISIBLE_SHARE
    })
}