import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const InputContainer = tw.div`w-full relative mx-2 py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;

function Control(props) {
  const { name, label } = props;
  return (
    <InputContainer>
      {label ? <Label>{label}</Label> : ""}
      <Input
        name={name}
        {...props.data}
        onChange={(e) => props.changeHandler(e.target.name, e.target.value)}
      />
    </InputContainer>
  );
}

export default Control;
