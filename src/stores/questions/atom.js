import { atom } from "recoil";

const questionsState = atom({
  key: "questionsState", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      title: "질문1입니다.",
      desc: "설명1 입니다.",
      type: "text",
      options: {
        placeholder: "placeholder입니다.",
      },
      required: false,
    },
    {
      title: "질문2입니다.",
      desc: "설명2 입니다.",
      type: "textarea",
      options: { placeholder: "placeholder입니다." },
      required: false,
    },
    {
      title: "질문3입니다.",
      desc: "설명3 입니다.",
      type: "select",
      options: {
        items: ["답변1", "답변2", "답변3", "답변4", "답변5"],
      },
      required: false,
    },
  ], // default value (aka initial value)
});

export default questionsState;
