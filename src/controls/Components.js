import tw from "twin.macro";
import styled from "styled-components";

// Containers
export const Container = tw.div`w-full h-full max-w-sm flex flex-col px-6 sm:px-10 lg:px-6 py-10 justify-between shadow-raised bg-primary text-gray-100 relative overflow-y-auto opacity-75`;
export const ContainerLabel = tw.h2`text-3xl sm:text-4xl font-bold`;
export const SubContainer = tw.div`flex flex-col`;
export const SubContainerLabel = tw.h3`text-xl sm:text-2xl font-bold`;
export const RowContainer = tw.div`flex justify-between`;

// Iteration Components
export const Arrows = tw.div`mx-auto flex py-5 mt-6`;
export const ArrowButton = styled.button`
  ${tw`mx-3 p-4 rounded-full bg-gray-200 hover:bg-gray-300 text-primary hover:text-secondary focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;
export const CounterLabel = tw.h4`mx-3 my-1 h-4 text-3xl`;

// Control Input Components
const ControlContainer = tw.div`w-full relative mx-2 py-5 mt-6`;
const ControlLabel = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const ControlInput = styled.input`
  ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-secondary focus:outline-none`};
  ::placeholder {
    ${tw`text-gray-500`}
  }
`;
export const ControlButton = (props) => {
  const { name, label } = props;
  return (
    <ControlContainer>
      <ControlLabel>{label}</ControlLabel>
      <ControlInput
        name={name}
        {...props.data}
        onChange={(e) => props.changeHandler(e.target.name, e.target.value)}
      />
    </ControlContainer>
  );
};
