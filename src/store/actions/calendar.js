import * as types from "../types/calendar"
import { createAction } from 'redux-actions'
/*
export const act_SET_TODAY = createAction(types.SET_TODAY,(day)=>{
    return day;
});
*/

export default createActions({
    [SET_TODAY]:(day)=>day,
    [SET_DATE_SELECTED]:(day)=>day,
    [SET_EVENT]:(eventList)=>eventList
})