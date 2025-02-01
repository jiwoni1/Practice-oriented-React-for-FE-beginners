import { useRecoilState } from "recoil";

import answersState from "../stores/questions/atom";
import useStep from "./useStep";

function useCurrentAnswer() {
  const step = useStep();

  // Recoil에서 가져오기
  const [answers, setAnswers] = useRecoilState(answersState);

  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };
  return [answer, setAnswer];
}

export default useCurrentAnswer;
