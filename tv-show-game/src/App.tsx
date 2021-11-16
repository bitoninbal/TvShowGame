import React from "react";
import "./App.css";
import { MainWindow } from "./MainWindow";
import { MainWindowWrapperStyled } from "./Styles";

const App = () => {
  return (
    <MainWindowWrapperStyled>
      <MainWindow />
    </MainWindowWrapperStyled>
  );
};

export default App;
