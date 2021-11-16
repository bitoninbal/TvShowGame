import React, { useEffect, useState } from "react";
import { GameStatus, TvShowData } from "../Types";

const startGame = "What is the movie name?";
const gameOver = "Game Over";

export const useMissingLetters = () => {
  const [currentWord, setCurrentWord] = useState<string>("hfhfkj");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>();
  const [score, setScore] = useState<number>(0);
  const [numOfHint, setNumOfHint] = useState<number>(0);
  const [lifePoint, setLifePoint] = useState<number>(3);
  const [rightAnswer, setRightAnswer] = useState<number>(0);
  const [wrongAnswer, setWrongAnswer] = useState<number>(0);
  const [status, setStatus] = useState<string>(startGame);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.ON_GAME);
  const [hintOverview, setHintOverview] = useState<string>("");
  const [wordWithMissingLeters, setWordWithMissingLeters] = useState<
    [string[]]
  >([[]]);
  const [tvShowData, setTvShowData] = useState<TvShowData>();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=cfeaa96ce6e46d147f40f8e1d6de05d9&language=en-US&page=1"
    )
      .then((data) => data.json())
      .then((data) => setTvShowData({ ...data }));
  }, []);

  useEffect(() => {
    if (tvShowData) {
      setCurrentWord(tvShowData.results[wordIndex].name);
    }
  }, [tvShowData, wordIndex]);

  useEffect(() => {
    createMissingLetters(currentWord);
  }, [currentWord]);

  useEffect(() => {
    if (lifePoint === 0) {
      setStatus(gameOver);
      setGameStatus(GameStatus.GAME_OVER);
    }
  }, [lifePoint]);

  const createMissingLetters = (currentWord: string) => {
    const splitToWords = currentWord.split(" ");
    const arr: [string[]] = [[]];
    splitToWords.map((word) => {
      const temp = word.split("");
      const randomIndex1 = Math.floor(Math.random() * (temp.length + 1));
      const randomIndex2 = Math.floor(Math.random() * (temp.length + 1));
      temp[randomIndex1] = "";
      temp[randomIndex2] = "";
      arr.push(temp);
    });
    setWordWithMissingLeters(arr);
  };

  const handleCheckTheGusseButtonClick = () => {
    if (answer === currentWord) {
      setWordIndex(wordIndex + 1);
      setRightAnswer(rightAnswer + 1);
      setScore(score + 1);
      setHintOverview("");
      setAnswer("");
    } else {
      setWrongAnswer(wrongAnswer + 1);
      setLifePoint(lifePoint - 1);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAnswer(e.target.value);
  };

  const initGameParams = () => {
    setCurrentWord(tvShowData!.results[0].name);
    setWordIndex(0);
    setAnswer("");
    setScore(0);
    setNumOfHint(0);
    setLifePoint(3);
    setRightAnswer(0);
    setWrongAnswer(0);
    setStatus(startGame);
    setGameStatus(GameStatus.ON_GAME);
  };

  const handleHintIcon = () => {
    setNumOfHint(numOfHint + 1);
    setHintOverview(tvShowData!.results[wordIndex].overview);
  };

  return {
    wordWithMissingLeters,
    handleCheckTheGusseButtonClick,
    handleInputChange,
    gameStatus,
    status,
    initGameParams,
    numOfHint,
    rightAnswer,
    wrongAnswer,
    lifePoint,
    handleHintIcon,
    hintOverview,
    answer,
  };
};
