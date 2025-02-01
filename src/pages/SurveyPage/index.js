import React from "react";
import styled from "styled-components";

import Progressbar from "../../componenets/Progressbar";
import QuestionBox from "../../componenets/QuestionBox";

function SurveyPage() {
  return (
    <SurveyPageWrapper>
      <Progressbar />
      <QuestionBox />
    </SurveyPageWrapper>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
