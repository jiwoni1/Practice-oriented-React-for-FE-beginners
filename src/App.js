import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import CompletionPage from "./pages/CompletionPage";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          {/* 설문조사의 id, 설문조사 단계 */}
          {/* <Route path="/survey/:surveyId/:step" element={<SurveyPage />} /> */}
          {/* 상대경로로 인식하기 위해 주소 쪼개기 */}
          {/* 부모 하에 상대경로로 이동 */}
          <Route path="/survey/:surveyId/" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>

          <Route path="/completion" element={<CompletionPage />} />
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e5e5e5;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 700px;
  min-height: 500px;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  padding: 60px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
