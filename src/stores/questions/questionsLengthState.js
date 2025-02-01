import { selector } from "recoil";

import questionsState from "./atom";

const questionsLengthState = selector({
  key: "questionsLength", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const questions = get(questionsState);

    return questions.length;
  },
});

export default questionsLengthState;
