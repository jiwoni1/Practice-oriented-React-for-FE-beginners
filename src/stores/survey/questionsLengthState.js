import { selector } from "recoil";

import surveyState from "./surveyState";

const questionsLengthState = selector({
  key: "questionsLength", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const questions = get(surveyState).questions;

    return questions.length;
  },
});

export default questionsLengthState;
