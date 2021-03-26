import {
  CHANGE_CONTROL,
  CHANGE_CONTROL_FAILED,
  CHANGE_ALL_CONTROLS,
} from "./types";

//Actions
const changeControlAction = (value) => ({
  type: CHANGE_CONTROL,
  payload: value,
});
const controlErrorAction = (error) => ({
  type: CHANGE_CONTROL_FAILED,
  payload: error,
});
const addAllControlsAction = (value) => ({
  type: CHANGE_ALL_CONTROLS,
  payload: value,
});

// Changing Control
export const changeControl = (tag, value) => {
  return (dispatch) => {
    dispatch(changeControlAction({ tag, value }));
  };
};

//Error
export const controlError = (value) => {
  return (dispatch) => {
    dispatch(controlErrorAction(value));
  };
};

//All Controls
export const addAllControls = (value) => {
  return (dispatch) => {
    dispatch(addAllControlsAction(value));
  };
};
