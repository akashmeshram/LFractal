import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = styled.div`
  ${tw`relative bg-center bg-cover h-screen relative flex`}
  background-image: url("./background.jpg");
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
