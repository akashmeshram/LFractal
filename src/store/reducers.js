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

// let initialState = {
//   factor : 0.5, 
//   axiom : "FF", 
//   rule1 : "F=F", 
//   rule2 : "X=FX", 
//   startx : 400, 
//   starty : 800, 
//   iterations : 1, 
//   len : 300, 
//   angle : 60, 
//   thickness : 2,
//   error : null
// }

let initialState = {
  factor : {type : "number", value : 0.5, min : 0.1, max : 2, step : 0.1}, 
  axiom : {type : "text", value : "FF"}, 
  rule1 : {type : "text", value : "F=F"}, 
  rule2 : {type : "text", value : "X=FX"},
  startx : {type : "number", min : 0, max : 800, step : 25, value : 400}, 
  starty : {type : "number", min : 0, max : 800, step : 25, value : 800}, 
  iterations : {type : "number", min : 0, max : 10, step : 1, value : 1}, 
  len : {type : "number", min : 100, max : 60000, step : 50, value : 300}, 
  angle : {type : "number", min : 5, max : 150, step : 1, value : 60}, 
  thickness : {type : "number", min : 1, max : 5, step : 1, value : 2},
  error : null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FACTOR :
      return {...state, factor : {...state.factor, value : action.payload }};
    case ADD_AXIOM :
      return {...state, axiom : {...state.axiom, value : action.payload }};
    case ADD_RULE1 :
      return {...state, rule1 : {...state.rule1, value : action.payload }};
    case ADD_RULE2 :
      return {...state, rule2 : {...state.rule2, value : action.payload }};
    case ADD_STARTX :
      return {...state, startx : {...state.startx, value : action.payload }};
    case ADD_STARTY :
      return {...state, starty : {...state.starty, value : action.payload }};
    case ADD_ITERATION :
      return {...state, iterations : {...state.iterations, value : action.payload }};
    case ADD_LENGTH :
      return {...state, len : {...state.len, value : action.payload }};
    case ADD_ANGLE :
      return {...state, angle : {...state.angle, value : action.payload }};
    case ADD_TICKNESS :
      return {...state, thickness : {...state.thickness, value : action.payload }};
    case ADD_CONTROLE_FAILED :
      return {...state, error : action.payload.error };
    case ADD_ALL_CONTROLS :
      return {
        ...state,
        factor : {...state.factor, value : action.payload.factor },
        axiom : {...state.axiom, value : action.payload.axiom },
        rule1 : {...state.rule1, value : action.payload.rule1 },
        rule2 : {...state.rule2, value : action.payload.rule2 },
        startx : {...state.startx, value : action.payload.startx },
        starty : {...state.starty, value : action.payload.starty },
        iterations : {...state.iterations, value : action.payload.iterations },
        len : {...state.len, value : action.payload.len },
        angle : {...state.angle, value : action.payload.angle },
        thickness : {...state.thickness, value : action.payload.thickness }
      };
    default :
      return state;
  }
};

export default reducer;