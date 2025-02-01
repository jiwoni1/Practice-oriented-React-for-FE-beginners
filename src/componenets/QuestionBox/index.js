import React from "react";
import styled from "styled-components";

import useCurrentAnswer from "../../hooks/useCurrentAnswer";
import useCurrentQuestion from "../../hooks/useCurrentQuestion";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

const QuestionBox = () => {
  const question = useCurrentQuestion();
  const [answer, setAnswer] = useCurrentAnswer;

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons />
    </QuestionBoxWrapper>
  );
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%l;
`;

export default QuestionBox;
