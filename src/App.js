import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";

// import styled from "styled-components";

import Board from "./board";
import Controls from "./controls";
import Patterns from "./patterns";
import Layout from "./components/Layout";

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
