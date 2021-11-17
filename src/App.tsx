import React from "react";
import "./App.css";
import { MainWindow } from "./Components/MainWindow";
import { MainWindowWrapperStyled } from "./Styles/Styles";

const App = () => {
  return (
    <MainWindowWrapperStyled>
      <MainWindow />
    </MainWindowWrapperStyled>
  );
};

export default App;
