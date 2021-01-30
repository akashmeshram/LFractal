import Lsystem from './lsystem';
import store from '../store';

// P5 Sketch Script
const Board = (p) => {
  //preload
  p.preload = () =>{
    p.angleMode(p.DEGREES);
    p.createCanvas(p.windowWidth*0.5, p.windowHeight);
  }
  //Setup
  p.setup = () => {
    p.createCanvas(p.windowWidth*0.5, p.windowHeight);
    p.noLoop();
  }
  //Draw
  p.draw = () => {
    const state = store.getState();
    const data = {
      factor : state.factor.value, 
      axiom : state.axiom.value, 
      rule1 : state.rule1.value, 
      rule2 : state.rule2.value, 
      startx : state.startx.value, 
      starty : state.starty.value, 
      iterations : state.iterations.value, 
      len : state.len.value, 
      angle : state.angle.value, 
      thickness : state.thickness.value
    };
    const lObject = new Lsystem(data);
    lObject.draw(p);
  }
};

export default Board;