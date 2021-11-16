import React from "react";
import { LiStyled, UlStyled } from "../Styles";

interface WordWithMissingLettersProps {
  wordWithMissingLeters: any;
}
export const WordWithMissingLetters = (props: WordWithMissingLettersProps) => {
  const { wordWithMissingLeters } = props;

  return (
    <UlStyled>
      {wordWithMissingLeters.map((word: string[]) =>
        word.map((letter: string, index: number) => {
          return <LiStyled key={index}> {letter}</LiStyled>;
        })
      )}
    </UlStyled>
  );
};
