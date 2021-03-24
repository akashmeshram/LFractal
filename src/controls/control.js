import styled from 'styled-components';

const Wrapper = styled.div`
  color: #FFFFFF;
  margin: 5px 15px;
  padding: 10px 15px;	
  border-radius: 4px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  :hover {
    background: rgba(255, 255, 255, 0.63);
    color: black;
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 6px 12px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  :hover {
    border-color: #000;
    color: #000;
  }
`;

function Control(props) {
  const {name, label} = props;
  return (
  <Wrapper>
    {label} 
    <Input name = {name}  {...props.data} onChange={(e) => props.changeHandler(e.target.name, e.target.value)}/>
  </Wrapper>
  );
}

export default Control;