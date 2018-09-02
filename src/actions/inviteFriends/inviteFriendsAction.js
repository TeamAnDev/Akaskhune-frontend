export const CHANGE_FILTER_CONTACTS = "CHANGE_FILTER_CONTACTS";

export function changeFilter(filter) {
    return({
        type: CHANGE_FILTER_CONTACTS,
        filter
    })
}
