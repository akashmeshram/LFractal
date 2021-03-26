import "tailwindcss/dist/base.css";
import "./globalStyles.css";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// Components
import Board from "./board";
import Controls from "./controls";
import Patterns from "./patterns";

const Layout = styled.div`
  ${tw`relative bg-center bg-cover h-screen relative flex`}
  background-image: url("./background.jpg");
`;

function App() {
  return (
    <Layout>
      <Controls />
      <Board />
      <Patterns />
    </Layout>
  );
}

export default App;
