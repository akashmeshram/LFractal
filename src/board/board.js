import Lsystem from "./Lsystem";
import store from "../store";

const Board = (width, height) => {
  // P5 Sketch Script
  const p5Sketch = (p) => {
    //preload
    p.preload = () => {
      p.angleMode(p.DEGREES);
      p.createCanvas(width, height);
    };
    //Setup
    p.setup = () => {
      p.createCanvas(width, height);
      p.noLoop();
    };
    //Draw
    p.draw = () => {
      const state = store.getState();
      const data = {
        factor: state.factor.value,
        axiom: state.axiom.value,
        rule1: state.rule1.value,
        rule2: state.rule2.value,
        startx: state.startx.value,
        starty: state.starty.value,
        iterations: state.iterations.value,
        len: state.len.value,
        angle: state.angle.value,
        thickness: state.thickness.value,
      };
      const lObject = new Lsystem(data);
      lObject.draw(p);
    };
  };

  return p5Sketch;
};

export default Board;
