import React, { useEffect, useState } from "react";
import { GameStatus, TvShowData } from "../Types/Types";

const startGame = "What is the movie name?";
const gameOver = "Game Over";
const space = [" "];

export const useMissingLetters = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [numOfHint, setNumOfHint] = useState<number>(0);
  const [lifePoint, setLifePoint] = useState<number>(3);
  const [rightAnswer, setRightAnswer] = useState<number>(0);
  const [wrongAnswer, setWrongAnswer] = useState<number>(0);
  const [statusLabel, setStatusLabel] = useState<string>(startGame);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.ON_GAME);
  const [hintOverview, setHintOverview] = useState<string>("");
  const [wordWithMissingLeters, setWordWithMissingLeters] = useState<
    [string[]]
  >([[]]);
  const [tvShowData, setTvShowData] = useState<TvShowData>();
  const [isWrongAnswer, setIsWrongAnswer] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=cfeaa96ce6e46d147f40f8e1d6de05d9&language=en-US&page=1"
    )
      .then((data) => data.json())
      .then((data) => setTvShowData({ ...data }));
  }, []);

  useEffect(() => {
    if (tvShowData) {
      setCurrentWord(
        tvShowData.results[wordIndex].name.replace("'", "").toLowerCase()
      );
    }
  }, [tvShowData, wordIndex]);

  useEffect(() => {
    createMissingLetters(currentWord);
  }, [currentWord]);

  useEffect(() => {
    if (lifePoint === 0) {
      setStatusLabel(gameOver);
      setGameStatus(GameStatus.GAME_OVER);
    }
  }, [lifePoint]);

  const removeRandomLetters = (word: string[]) => {
    const randomIndex1 = Math.floor(Math.random() * (word.length - 1));
    const randomIndex2 = Math.floor(Math.random() * (word.length - 1));
    word[randomIndex1] = "";
    word[randomIndex2] = "";
    return word.concat(space);
  };

  const createMissingLetters = (currentWord: string) => {
    const splitToWords = currentWord.split(" ");
    const arr: [string[]] = [[]];

    splitToWords.forEach((word) => {
      const letters = word.split("");
      if (letters.length < 3) {
        arr.push(letters.concat(space));
      } else {
        const wordWithspace = removeRandomLetters(letters);
        arr.push(wordWithspace);
      }
    });

    setWordWithMissingLeters(arr);
  };

  const handleCheckTheGuessButtonClick = () => {
    if (answer.toLowerCase() === currentWord) {
      setWordIndex(wordIndex + 1);
      setRightAnswer(rightAnswer + 1);
      setScore(score + 1);
      setHintOverview("");
      setAnswer("");
      setIsWrongAnswer(false);
    } else {
      setWrongAnswer(wrongAnswer + 1);
      setLifePoint(lifePoint - 1);
      setIsWrongAnswer(true);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAnswer(e.target.value);
  };

  const initGameParams = () => {
    setCurrentWord(tvShowData!.results[0].name.replace("'", "").toLowerCase());
    setWordIndex(0);
    setAnswer("");
    setScore(0);
    setNumOfHint(0);
    setLifePoint(3);
    setRightAnswer(0);
    setWrongAnswer(0);
    setStatusLabel(startGame);
    setGameStatus(GameStatus.ON_GAME);
    setIsWrongAnswer(false);
    setHintOverview("");
  };

  const handleHintIcon = () => {
    setNumOfHint(numOfHint + 1);
    setHintOverview(tvShowData!.results[wordIndex].overview);
  };

  return {
    wordWithMissingLeters,
    handleCheckTheGuessButtonClick,
    handleInputChange,
    gameStatus,
    statusLabel,
    initGameParams,
    numOfHint,
    rightAnswer,
    wrongAnswer,
    lifePoint,
    handleHintIcon,
    hintOverview,
    answer,
    isWrongAnswer,
  };
};
