import { atom } from "recoil";

const answersState = atom({
  key: "answersState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export default answersState;
