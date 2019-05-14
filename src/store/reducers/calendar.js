import { handleActions } from 'redux-actions'
import { SET_TODAY, SET_DATE_SELECTED, SET_EVENT } from '../types/calendar'

const defaultState = {
    today: '',
    selectedDay:'',
    eventList:[]
};
/*
export default handleAction(SET_TODAY,(state, action) => {
    return {
      ...state,
      today: action.day,
    };
  }, defaultState);
*/
export default handleActions({
    [SET_TODAY]:(state, action) => {
        return {
            ...state,
            today: action.day,
        };
    },
    [SET_DATE_SELECTED]:(state, action) => {
        return {
            ...state,
            selectedDay:  action.day,
        };
    },
    [SET_EVENT]:(state, action) => {
        return {
            ...state,
            eventList:  action.eventList,
        };
    }

},defaultState);