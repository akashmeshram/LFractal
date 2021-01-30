import { 
  ADD_CONTROLE, 
  ADD_CONTROLE_FAILED,
  ADD_ALL_CONTROLS 
} from './types';

//Actions
const addControlAction = (value) => ({type : ADD_CONTROLE, payload : value })
const controlErrorAction = (error) => ({type : ADD_CONTROLE_FAILED, payload : error })
const addAllControlsAction = (value) => ({type : ADD_ALL_CONTROLS, payload : value })

// Adding Control
export const addControl = (tag, value) => {
  return dispatch => {
    dispatch(addControlAction({tag, value}));
  }
}

//Error
export const controlError = (value) => {
  return dispatch => {
    dispatch(controlErrorAction(value));
  }
}

//All Controls
export const addAllControls = (value) => {
  return dispatch => {
    dispatch(addAllControlsAction(value));
  }
}
