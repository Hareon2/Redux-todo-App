import {SET_FILTER} from "./filter-const";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter,
})