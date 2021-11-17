import React from "react";
import { LiStyled, UlStyled } from "../Styles";

interface WordWithMissingLettersProps {
  wordWithMissingLeters: any;
}
const borderBottonPerpel = "2px solid #303030";
const borderBottonGray = " 2px solid #9c27b0";
export const WordWithMissingLetters = (props: WordWithMissingLettersProps) => {
  const { wordWithMissingLeters } = props;

  return (
    <UlStyled>
      {wordWithMissingLeters.map((word: string[]) =>
        word.map((letter: string, index: number) => {
          return (
            <LiStyled
              style={{
                borderBottom:
                  letter === " " ? borderBottonPerpel : borderBottonGray,
              }}
              key={index}
            >
              {letter}
            </LiStyled>
          );
        })
      )}
    </UlStyled>
  );
};
