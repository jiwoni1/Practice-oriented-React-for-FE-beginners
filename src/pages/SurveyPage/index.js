import React, { Suspense } from "react";
import styled from "styled-components";

import Progressbar from "../../componenets/Progressbar";
import QuestionBox from "../../componenets/QuestionBox";

function SurveyPage() {
  return (
    // api로 받아오는 데이터가 준비되지 않았을 때 보여주는 화면
    <Suspense fallback={<div>Loading...</div>}>
      <SurveyPageWrapper>
        <Progressbar />
        <QuestionBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
