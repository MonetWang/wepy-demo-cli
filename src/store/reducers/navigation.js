import { handleActions } from 'redux-actions'
import { SET_START_POINT,SET_END_POINT,NAVGTION } from '../types/navigation'

const defaultState = {
  START_POINT:{
    latitude:39.996309,
    longitude:116.480656,
    name:"望京SOHO",
    address:"北京市朝阳区望京街10号"
  },
  END_POINT:{
    latitude:39.996309,
    longitude:116.480656,
    name:"望京SOHO",
    address:"北京市朝阳区望京街10号"
  }
}
export default handleActions({
  [SET_START_POINT] (state,data) {
    state.START_POINT = data.location;
    return state
  },
  [SET_END_POINT] (state,data) {
    state.END_POINT = data.location;
    return state
  },
  [NAVGTION] (state, action) {
    
  }
},defaultState)