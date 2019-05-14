import * as types from "../types/navigation"
import { createAction } from 'redux-actions'

export const act_set_start = createAction(types.SET_START_POINT);
export const act_set_end = createAction(types.SET_END_POINT);