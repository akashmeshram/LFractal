import { 
  ADD_FACTOR, 
  ADD_AXIOM,  
  ADD_RULE1,
  ADD_RULE2,  
  ADD_STARTX,  
  ADD_STARTY,  
  ADD_ITERATION,
  ADD_LENGTH, 
  ADD_ANGLE, 
  ADD_TICKNESS, 
  ADD_CONTROLE_FAILED,
  ADD_ALL_CONTROLS 
} from './types';

//Actions
const addFactorAction = (value) => ({type : ADD_FACTOR, payload : value })
const addAxiomAction = (value) => ({type : ADD_AXIOM, payload : value})
const addRule1Action = (value) => ({type : ADD_RULE1, payload : value })
const addRule2Action = (value) => ({type : ADD_RULE2, payload : value })
const addStartxAction = (value) => ({type : ADD_STARTX, payload : value })
const addStartyAction = (value) => ({type : ADD_STARTY, payload : value })
const addIterationAction = (value) => ({type : ADD_ITERATION, payload : value })
const addLengthAction = (value) => ({type : ADD_LENGTH, payload : value })
const addAngleAction = (value) => ({type : ADD_ANGLE, payload : value })
const addTicknessAction = (value) => ({type : ADD_TICKNESS, payload : value })
const controlErrorAction = (error) => ({type : ADD_CONTROLE_FAILED, payload : error })
const addAllControlsAction = (value) => ({type : ADD_ALL_CONTROLS, payload : value })

//Factor
export const addFactor = (value) => {
  return dispatch => {
    dispatch(addFactorAction(value));
  }
}

//Axiom
export const addAxiom = (value) => {
  return dispatch => {
    dispatch(addAxiomAction(value));
  }
}

//Rule1
export const addRule1 = (value) => {
  return dispatch => {
    dispatch(addRule1Action(value));
  }
}

//Rule2
export const addRule2 = (value) => {
  return dispatch => {
    dispatch(addRule2Action(value));
  }
}

//Startx
export const addStartx = (value) => {
  return dispatch => {
    dispatch(addStartxAction(value));
  }
}

//Starty
export const addStarty = (value) => {
  return dispatch => {
    dispatch(addStartyAction(value));
  }
}

//Iteration
export const addIteration = (value) => {
  return dispatch => {
    dispatch(addIterationAction(value));
  }
}

//Length
export const addLength = (value) => {
  return dispatch => {
    dispatch(addLengthAction(value));
  }
}

//Angle
export const addAngle = (value) => {
  return dispatch => {
    dispatch(addAngleAction(value));
  }
}

//Tickness
export const addTickness = (value) => {
  return dispatch => {
    dispatch(addTicknessAction(value));
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
