import React from "react";
import { useMissingLetters } from "../Hooks/useMissingLetters";
import { LiStyled, UlStyled } from "../Styles";

interface WordWithMissingLettersProps {
  wordWithMissingLeters: any;
}
export const WordWithMissingLetters = (props: WordWithMissingLettersProps) => {
  const { wordWithMissingLeters } = props;

  return (
    <UlStyled>
      {wordWithMissingLeters.map((letter: string, index: number) => {
        return <LiStyled key={index}> {letter}</LiStyled>;
      })}
    </UlStyled>
  );
};
