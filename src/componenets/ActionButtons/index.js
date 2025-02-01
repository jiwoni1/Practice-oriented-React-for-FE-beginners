import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import useStep from "../../hooks/useStep";
import questionsLengthState from "../../stores/survey/questionsLengthState";
import Button from "../Button";

const ActionButtons = () => {
  const questionsLength = useRecoilValue(questionsLengthState);
  const step = useStep();

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();
  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate("/completion");
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            console.log("next");
            // path는 숫자가 아니라 문자열이여야함
            // 상대 경로로 가게 됨(현재위치에서 이동만)
            // navigate(`${step + 1}`);
            // 절대 경로로 써주기
            // navigate(`/survey/id/${step + 1}`);
            // 근데 그러면 id값이 고정됨, props로 받아오기도 번거로움
            // 그래서 app.js에서 값을 쪼개주고 상대경로 사용
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
};

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
