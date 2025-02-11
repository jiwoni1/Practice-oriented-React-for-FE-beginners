import { useRecoilValue } from "recoil";

import answersState from "../stores/answers/atom";

function useAnswers() {
  return useRecoilValue(answersState); // 단일 answers 데이터 return
}

export default useAnswers;
