import { useRecoilValue } from "recoil";

import questionsState from "../stores/questions/atom";
import useStep from "./useStep";

function useCurrentQuestion() {
  const step = useStep();

  // Recoil에서 가져오기
  const questions = useRecoilValue(questionsState);

  return questions[step];
}

export default useCurrentQuestion;
